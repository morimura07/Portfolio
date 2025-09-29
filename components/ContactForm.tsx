"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email via API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Reset form and show success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });

        setSubmitStatus("success");

        // Reset success status after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");

      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-black/30 border-white/20 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Start a Conversation</CardTitle>
        <p className="text-gray-300 text-sm mt-2">
          I typically respond within 24 hours
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                First Name <span className="text-red-400">*</span>
              </label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`bg-white/10 border-white/30 text-white placeholder:text-gray-400 ${
                  errors.firstName ? "border-red-400" : ""
                }`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name <span className="text-red-400">*</span>
              </label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`bg-white/10 border-white/30 text-white placeholder:text-gray-400 ${
                  errors.lastName ? "border-red-400" : ""
                }`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email <span className="text-red-400">*</span>
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`bg-white/10 border-white/30 text-white placeholder:text-gray-400 ${
                errors.email ? "border-red-400" : ""
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Subject <span className="text-red-400">*</span>
            </label>
            <Input
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`bg-white/10 border-white/30 text-white placeholder:text-gray-400 ${
                errors.subject ? "border-red-400" : ""
              }`}
              placeholder="Project Collaboration"
            />
            {errors.subject && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Message <span className="text-red-400">*</span>
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-[120px] ${
                errors.message ? "border-red-400" : ""
              }`}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full transition-all duration-300 ${
              submitStatus === "success"
                ? "bg-green-600 hover:bg-green-700"
                : submitStatus === "error"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-white/20 hover:bg-white/30"
            } border border-white/30 text-white`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : submitStatus === "success" ? (
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                Message Sent Successfully!
              </div>
            ) : submitStatus === "error" ? (
              <div className="flex items-center gap-2">
                <AlertCircle size={16} />
                Failed to Send - Try Again
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send size={16} />
                Send Message
              </div>
            )}
          </Button>

          {submitStatus === "success" && (
            <div className="text-center text-green-400 text-sm">
              Your message has been sent successfully! I'll get back to you
              within 24 hours.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="text-center text-red-400 text-sm">
              Failed to send your message. Please try again or contact me
              directly at luckydavid0812@gmail.com
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
