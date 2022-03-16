import { Clipboard, Check } from '@components/icons';
import React from 'react';
import { useClipboard } from '@hooks/useClipboard';

interface CopyButtonProps {
  code: string;
}

const CopyButton = ({ code }: CopyButtonProps) => {
  const { hasCopied, onCopy } = useClipboard(code);
  const icon = hasCopied ? (
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
  );

  return (
    <button aria-label="copy Button" type="button" onClick={onCopy}>
      {icon}
    </button>
  );
};

export default CopyButton;
