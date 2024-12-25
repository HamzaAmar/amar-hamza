'use client';

import { Button } from '@components/core';
import { Send } from '@components/icons';
import { useFormStatus } from 'react-dom';
import { StatusProps } from './contact.type';

export function SubmitButton({ status }: { status: StatusProps }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={status !== 'solved'}
      icon={<Send width="15" fill="currentColor" />}
      status={pending ? 'loading' : 'idle'}
    >
      Contact
    </Button>
  );
}
