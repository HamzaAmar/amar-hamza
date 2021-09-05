import React from 'react';

const codeContainer = (props: {
  children: any;
  className: any;
  viewlines: any;
}) => {
  const { className, children, viewlines } = props;

  const language = className?.replace(/language-/, '');
  const rawCode = children;
  return (
    <>
      {/* <Highlight
        code={rawCode}
        language={language}
        showLines={viewlines}
      /> */}
      {/* <CopyButton /> */}
    </>
  );
};

export default codeContainer;
