import nodemailer from "nodemailer";

export async function sendMail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_RECEIVER,
    subject: `📩 New message from ${name}`,
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background: #fafafa;">
      <h2 style="color: #333; margin-bottom: 10px;">New Contact Form Submission</h2>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
      <p style="margin: 0 0 8px;"><strong>Subject:</strong> ${subject}</p>
      <hr style="margin: 20px 0;" />
      <p style="white-space: pre-line; color: #555;">${message}</p>
    </div>
  `,
  });
}
