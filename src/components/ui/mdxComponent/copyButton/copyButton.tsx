import { Clipboard, Check } from '@components/icons';
import React, { ButtonHTMLAttributes, useState } from 'react';
import { useClipboard } from '@hooks/useClipboard';

interface CopyButtonProps  {
  code: string
}

const copyButton = ({code}:CopyButtonProps) => {
const { hasCopied, onCopy } = useClipboard(code);

  return (
    <button
      aria-label="copy Button"
      onClick={onCopy}
    >
      {hasCopied ? (
        <Clipboard
          width="16"
          height="16"
          aria-hidden="true"
          focusable="false"
        />
      ) : (
        <Check
          width="16"
          height="16"
          aria-hidden="true"
          focusable="false"
        />
      )}
    </button>
  );
};

export default copyButton;
