'use client';

import {
  Alert,
  Button,
  FormContainer,
  Input,
  Textarea,
} from '@components/core';
import { Email, Message, Send, User } from '@components/icons';
import { sendMail } from 'app/actions/contact';
import React, { useActionState, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { FormState, StatusProps } from './contact.type';

export const initialState: FormState = {
  message: '',
  status: 'idle',
};

const Form = () => {
  const [state, formAction, pending] = useActionState(
    sendMail,
    initialState,
  );
  const [status, setStatus] = React.useState<StatusProps>('idle');
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      ref={formRef}
      aria-labelledby="contact-me"
      className="Sf-5"
      action={formAction}
    >
      {state?.message && (
        <Alert
          color={state.status === 'error' ? 'd' : 's'}
          title={state.status ?? ''}
          message={state.message}
          aria-live="polite"
        />
      )}
      <div className="Sf-4">
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
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_SITE_KEY as string}
          onError={() => setStatus('error')}
          onExpire={() => setStatus('expired')}
          onSuccess={() => setStatus('solved')}
        />

        <Button
          disabled={status !== 'solved'}
          icon={<Send width="15" fill="currentColor" />}
          status={pending ? 'loading' : 'idle'}
        >
          Contact
        </Button>
      </div>
    </form>
  );
};

export default Form;
