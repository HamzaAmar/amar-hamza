'use server';
import nodemailer from 'nodemailer';
import type { FormState } from 'app/contact/form';
export interface ContactProps {
  message: string;
  email: string;
  name: string;
  subject: string;
}

const mailContent = (
  name: string,
  from: string,
  text: string,
) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Email from ${name}</title>
  <style>
    body {
      font-family: sans-serif;
      line-height: 1.5;
    }
    .signature {
      margin-top: 20px;
      border-top: 1px solid #ccc;
      padding-top: 10px; 
    }
  </style>
</head>
<body>
  <p>Hi, I'm <strong>${name}</strong>.</p>
  <p>You can reach me at <a href="mailto:${from}">${from}</a>.</p>
  
  <div class="signature">
    <p style="font-weight:bold">${text}</p> 
  </div>
</body>
</html>`;

export async function sendMail(
  state: FormState,
  formData: FormData,
): Promise<Required<FormState>> {
  const { email, message, name, subject } =
    (Object.fromEntries(formData) as any as ContactProps) ?? {};

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const content = {
    from: `"${name}" <${email}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: mailContent(name, email, message),
  };

  try {
    await transporter.sendMail(content);
    return { message: 'Email Send With Success', status: 'success' };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
        status: 'error',
      };
    }
    return {
      message: 'Something wen wrong when we try to send Mail',
      status: 'error',
    };
  }
}
