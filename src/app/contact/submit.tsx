'use client';

import { Button } from '@components/core';
import { Send } from '@components/icons';
import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      icon={<Send width="15" fill="currentColor" />}
      status={pending ? 'loading' : 'idle'}
    >
      Contact
    </Button>
  );
}
