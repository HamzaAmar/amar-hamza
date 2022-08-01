import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import type { ResponseError } from '@sendgrid/mail';

interface Body {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface Response {
  error: unknown | null;
  message: string | null;
}

const sendEmail = async (
  name: string,
  from: string,
  subject: string,
  text: string,
): Promise<Response> => {
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
    return {
      message:
        'Email send with success thanks i am going to answer you as mush a possible ',
      error: null,
    };
  } catch (error: unknown) {
    return { message: null, error };
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, subject, email, message } = req.body as Body;
  if (req.method === 'POST') {
    try {
      const data = await sendEmail(name, email, subject, message);
      const error = data.error as ResponseError;
      if (data.error)
        return res.status(410).json({
          message: `error.message nice to me you from the data error , ${error.message}`,
        });
      return res.status(202).json({
        message: data.message,
      });
    } catch (err: any) {
      res.status(500).json({
        message: `error.message nice to me you from the catch statement error , ${err.message}`,
      });
    }
  }
}
