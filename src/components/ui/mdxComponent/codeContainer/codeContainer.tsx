import React, { ReactNode } from 'react';
import { CopyButton, Highlight } from '..';

const codeContainer = (props: {
  children: any;
  className: any;
  viewlines: any;
}) => {
  const { className, children, viewlines } = props;

  console.log(props, props.children);

  const language = className?.replace(/language-/, '');
  const rawCode = children;
  return (
    <div>
      {/* <Highlight
        code={rawCode}
        language={language}
        showLines={viewlines}
      /> */}
      {/* <CopyButton /> */}
    </div>
  );
};

export default codeContainer;
