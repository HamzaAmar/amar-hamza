import { Layout } from '@components/common';
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
import React, { FormEvent } from 'react';
import { useForm, useContact, InitialValue } from '@hooks/form';
import { Social } from '@components/ui';

import type { ContactItemProps } from './contact.type';
import { CONTACT_INFO } from './contact.data';

const InfoItem = ({ icon, info }: ContactItemProps) => {
  return (
    <div className="contact--info-item u_column">
      {icon}
      <Text>{info}</Text>
    </div>
  );
};

const Contact = () => {
  const { onChange, values, onBlur, errors, touched, resetForm } =
    useForm<InitialValue>({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    });

  const { handleContact, state } = useContact();

  // const message = state.data.message ? (
  //   <div>{state.data.message}</div>
  // ) : null;
  const message = null;
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
        {message}
        <form
          onSubmit={(event: FormEvent) =>
            handleContact(values, event)
          }
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
          <FormContainer
            error={errors.name}
            name="name"
            label="Name"
            required
          >
            <Input
              name="name"
              onChange={onChange}
              onBlur={onBlur}
              value={values.name}
              touched={touched.name}
              error={errors.name}
              placeholder="type your name"
              icon={<User width="24" />}
              required
              autoComplete="name"
            />
          </FormContainer>
          <FormContainer
            error={errors.email}
            name="email"
            label="Email"
            required
          >
            <Input
              name="email"
              type="email"
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.email}
              error={errors.email}
              placeholder="type your email"
              required
              value={values.email}
              icon={<Email width="24" />}
              autoComplete="email"
            />
          </FormContainer>
          <FormContainer
            error={errors.subject}
            name="subject"
            label="Subject"
            required
          >
            <Input
              name="subject"
              onChange={onChange}
              onBlur={onBlur}
              value={values.subject}
              touched={touched.subject}
              error={errors.subject}
              placeholder="type your name"
              required
              icon={<Message width="24" />}
            />
          </FormContainer>
          <FormContainer
            error={errors.message}
            name="message"
            label="Message"
            required
          >
            <Textarea
              name="message"
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.message}
              error={errors.message}
              value={values.message}
              placeholder="type your Message"
              required
              icon={<Message width="24" />}
            />
          </FormContainer>
          <Button
            status={state.status}
            icon={<Send width="15" fill="currentColor" />}
          >
            Contact
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default Contact;
