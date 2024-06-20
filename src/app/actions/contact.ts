'use server';

import sgMail from '@sendgrid/mail';

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
    html: `
        <h1 style="font-size:35px;font-style:italic">Hi am ${name} </h1>
        <h1 style="font-size:35px;font-style:italic">This is my Email Address ${from} </h1>
        <p style="font-size:20px;font-weight:bold">${text}</p>
      `,
  };

  try {
    await sgMail.send(msg);
  } catch (error: unknown) {
    throw error;
  }
};

export async function sendMail(formData: FormData) {
  const entries = Object.fromEntries(
    formData,
  ) as any as SendEmailProps;
  try {
    await sendEmail(entries);
  } catch (err: any) {
    throw new Error(
      `error.message nice to me you from the catch statement error , ${err.message}`,
    );
  }
}
