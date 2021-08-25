import { Clipboard, Check } from '@components/icons';
import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

const copyButton = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const copiedData = copy('Hello world');

  console.log(copiedData);

  return (
    <button
      aria-label="copy Button"
      onClick={() => setHasCopied(true)}
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
