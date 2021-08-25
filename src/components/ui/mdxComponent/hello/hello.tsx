import React from 'react';

const hello = ({ children }: { children: any }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default hello;
