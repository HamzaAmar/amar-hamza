'use client';

import {
  FormContainer,
  Heading,
  Input,
  Text,
  Textarea,
} from '@components/core';
import { Email, Message, User } from '@components/icons';
import { sendMail } from 'app/actions/contact';
import React from 'react';
import { useFormState } from 'react-dom';
import { SubmitButton } from './submit';

export interface FormState {
  message?: string;
}

const initialState: FormState = {
  message: '',
};

const Form = () => {
  const [state, formAction] = useFormState(sendMail, initialState);

  return (
    <form
      aria-labelledby="contact-me"
      className="l_f_md"
      action={formAction}
    >
      <div className="l_f_xs">
        <Heading id="contact-me" as="h2">
          Contact Me
        </Heading>
        <Text size="sm" color="b" contrast="low">
          Curious about my services or have a specific question? I'm
          here to help! Don't hesitate to contact me, and let's
          explore how we can work together.
        </Text>
      </div>
      <div className="l_f_3xs">
        <FormContainer name="name" label="Name" required>
          <Input
            name="name"
            icon={<User width="24" />}
            required
            autoComplete="name"
          />
        </FormContainer>
        <FormContainer name="email" label="Email" required>
          <Input
            name="email"
            type="email"
            required
            icon={<Email width="24" />}
            autoComplete="email"
          />
        </FormContainer>
        <FormContainer name="subject" label="Subject" required>
          <Input
            name="subject"
            required
            icon={<Message width="24" />}
          />
        </FormContainer>
        <FormContainer name="message" label="Message" required>
          <Textarea
            name="message"
            required
            icon={<Message width="24" />}
          />
        </FormContainer>
        <SubmitButton />
      </div>
      {state?.message && (
        <p
          aria-live="polite"
          style={{ color: 'red', fontSize: '3rem' }}
        >
          {state.message}
        </p>
      )}
    </form>
  );
};

export default Form;
