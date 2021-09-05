/* eslint-disable react/display-name */
import React from 'react';
import Image from 'next/image';
import { Highlight } from '@components/ui';

import { PreProps } from './components.type';

const components = {
  Image,
  // code: CodeContainer,
  code: (props: any) => <Highlight {...props} />,
  pre: ({ children, ...props }: PreProps) => (
    <div
      style={{
        borderRadius: '1rem',
        margin: '1rem 0',
        background: 'red',
      }}
      {...props}
    >
      {children}
    </div>
  ),
  // code: () => <div>Hello</div>,
};

export default components;
