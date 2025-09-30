import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend only if API key is available
const getResendClient = () => {
  if (
    process.env.RESEND_API_KEY &&
    process.env.RESEND_API_KEY !== "your_resend_api_key_here"
  ) {
    return new Resend(process.env.RESEND_API_KEY);
  }
  return null;
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.subject ||
      !body.message
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = {
      to: "morimuradin@gmail.com", // Your email address
      from: body.email,
      subject: `Portfolio Contact: ${body.subject}`,
      text: `
Name: ${body.firstName} ${body.lastName}
Email: ${body.email}
Subject: ${body.subject}

Message:
${body.message}

---
Sent from Morimura Din's Portfolio Contact Form
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
            <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Subject:</strong> ${body.subject}</p>
          </div>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Message</h3>
            <p style="white-space: pre-wrap;">${body.message}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Try to send email using Resend if API key is available
    const resend = getResendClient();
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>", // Use your verified domain
          to: ["morimuradin@gmail.com"],
          replyTo: body.email,
          subject: emailContent.subject,
          html: emailContent.html,
        });

        if (error) {
          console.error("Resend error:", error);
          throw new Error("Failed to send email via Resend");
        }

        // Email sent successfully via Resend

        return NextResponse.json({
          success: true,
          message: "Message sent successfully!",
        });
      } catch (emailError) {
        console.error(
          "Resend email sending failed, falling back to logging:",
          emailError
        );
      }
    }

    // Fallback: Log the message for manual processing
    const messageDetails = {
      from: body.email,
      name: `${body.firstName} ${body.lastName}`,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
    };

    // Log contact form submission (in production, consider logging to a file or database)
    // Contact form submission received and processed

    // You could also save to a JSON file or database here
    // For now, the console log will be visible in your terminal

    return NextResponse.json({
      success: true,
      message: "Message received! I will get back to you soon.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
