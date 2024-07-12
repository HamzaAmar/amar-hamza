import { Email, Message, Send, User } from '@components/icons';
import {
  Button,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
  FormContainer,
  Social,
} from '@components/core';

import type { ContactItemProps } from './utils/contact.type';
import { CONTACT_INFO } from './utils/contact.data';

import { Metadata } from 'next';
import { sendMail } from 'app/actions/contact';
import Form from './form';

export const metadata: Metadata = {
  title: 'Contact Us', // Replace with your company name
  description:
    'Get in touch with us! We are happy to answer your questions and discuss your needs.',
};

const InfoItem = ({ icon, info, ...rest }: ContactItemProps) => {
  const Tag = rest.href ? 'a' : 'div';
  return (
    <Tag
      {...rest}
      data-link={!!rest.href}
      className="contact--info-item u_column"
    >
      {icon}
      <Text>{info}</Text>
    </Tag>
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
        <Form />
      </div>
    </Grid>
  );
};

export default contact;
