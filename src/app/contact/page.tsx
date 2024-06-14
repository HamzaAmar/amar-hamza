import { Email, Message, Send, User } from '@components/icons';
import {
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
  FormContainer,
} from '@components/core';
import { Social } from '@components/ui';

import type { ContactItemProps } from './utils/contact.type';
import { CONTACT_INFO } from './utils/contact.data';

import { NextApiRequest, NextApiResponse } from 'next';
import sgMail, { ResponseError } from '@sendgrid/mail';

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
export interface SendEmailProps {
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
  'use server';

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

const InfoItem = ({ icon, info }: ContactItemProps) => {
  return (
    <div className="contact--info-item u_column">
      {icon}
      <Text>{info}</Text>
    </div>
  );
};

const contact = () => {
  return (
    <Grid columns="1fr 1fr" className="sm_grid-one contact">
      <div className="contact--info  l_flow">
        <Heading size="2xl" className="contact--heading">
          get in touch
        </Heading>

        <Text
          color="slate"
          contrast="low"
          className="contact--description"
        >
          Please complete this form if you’re interested in hiring me
          or have any questions. I’m always delighted to respond and
          assist you
        </Text>

        <div className="contact--info-list l_flow">
          {CONTACT_INFO.map(({ id, ...rest }) => (
            <InfoItem key={id} {...rest} />
          ))}
        </div>
        <Social />
      </div>
      <div className="contact--form">
        <form
          aria-labelledby="contact-me"
          className="contact--form l_flow"
        >
          <div>
            <Heading id="contact-me" as="h2">
              Contact Me
            </Heading>
            <Text size="sm" color="slate" contrast="low">
              If you have any questions or if you're interested in
              hiring me, I'm happy to respond as quickly as possible.
              Please feel free to contact me at any time.
            </Text>
          </div>
          <FormContainer name="name" label="Name" required>
            <Input
              name="name"
              placeholder="type your name"
              icon={<User width="24" />}
              required
              autoComplete="name"
            />
          </FormContainer>
          <FormContainer name="email" label="Email" required>
            <Input
              name="email"
              type="email"
              placeholder="type your email"
              required
              icon={<Email width="24" />}
              autoComplete="email"
            />
          </FormContainer>
          <FormContainer name="subject" label="Subject" required>
            <Input
              name="subject"
              placeholder="type your name"
              required
              icon={<Message width="24" />}
            />
          </FormContainer>
          <FormContainer name="message" label="Message" required>
            <Textarea
              name="message"
              placeholder="type your Message"
              required
              icon={<Message width="24" />}
            />
          </FormContainer>
          <Button icon={<Send width="15" fill="currentColor" />}>
            Contact
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default contact;
