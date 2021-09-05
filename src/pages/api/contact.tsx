import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const sendEmail = (
  name: string,
  from: string,
  subject: string,
  text: string,
) => {
  sgMail.setApiKey(process.env.SENDGRID_KEY as string);

  const msg = {
    to: 'hamzamiloudamar@gmail.com',
    from,
    subject,
    html: `
      <h1 style="color:orange; font-style:italic">Hi am ${name} </h1>
      <p>${text}</p>
    `,
  };

  sgMail.send(msg);
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, subject, email, message } = req.body;
  if (req.method === 'POST') {
    try {
      sendEmail(name, email, subject, message);
      return res.status(200).json({
        message:
          'Email send with success thanks i am going to answer you as mush a possible ',
      });
    } catch (err: any) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
}
