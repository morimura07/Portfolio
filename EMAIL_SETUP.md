# Email Setup Instructions

## To enable contact form email sending, follow these steps:

### 1. Get a Resend API Key (Free)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/month free)
3. Go to the "API Keys" section in your dashboard
4. Create a new API key
5. Copy the API key

### 2. Set up Environment Variable

Create a `.env.local` file in the project root with:

```
RESEND_API_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with the API key from step 1.

### 3. Update Email Address (if needed)

The current email address is set to: `luckydavid0812@gmail.com`

If you need to change it, update the email address in:

- `app/api/contact/route.ts` (line 79)
- `components/ContactForm.tsx` (error message fallback)

### 4. Test the Contact Form

1. Run the development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the contact form submission

### 5. Optional: Use Your Own Domain

For production, you may want to:

1. Verify your own domain with Resend
2. Update the "from" address in `app/api/contact/route.ts` to use your domain
3. This improves email deliverability

## Current Implementation

- ✅ Full form validation
- ✅ Server-side email sending with Resend
- ✅ Fallback logging if email service fails
- ✅ Professional HTML email templates
- ✅ Reply-to functionality (user can reply directly)
- ✅ Error handling and user feedback

## Email Format

The emails you receive will include:

- Sender's name and email
- Subject line with "Portfolio Contact:" prefix
- Formatted message content
- Professional HTML styling
- Reply-to setup for easy responses
