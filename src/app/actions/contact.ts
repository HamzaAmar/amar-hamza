'use server';

import sgMail from '@sendgrid/mail';
import { FormState } from 'app/contact/form';

interface Body {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface SendEmailProps {
  name: string;
  from: string;
  subject: string;
  text: string;
}

const sendEmail = async ({
  name,
  from,
  subject,
  text,
}: SendEmailProps) => {
  sgMail.setApiKey(process.env.SENDGRID_KEY!);
  const msg = {
    to: process.env.EMAIL!,
    from: process.env.EMAIL!,
    subject,
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Email from ${name}</title>
  <style>
    body {
      font-family: sans-serif; /* Choose a clear, web-safe font */
      line-height: 1.5; /* Improve readability with better spacing */
    }
    .signature {
      margin-top: 20px; /* Add space before the signature */
      border-top: 1px solid #ccc; /* Add a subtle divider */
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
</html>`,
  };

  try {
    // await sgMail.send(msg);
  } catch (error: unknown) {
    throw error;
  }
};

export async function sendMail(
  prevState: FormState,
  formData: FormData,
) {
  const entries = Object.fromEntries(
    formData,
  ) as any as SendEmailProps;
  try {
    await sendEmail(entries);

    return { message: 'Email Send With Success' };
  } catch (err: any) {
    return {
      message: `error.message nice to me you from the catch statement error , ${err.message}`,
    };
  }
}
