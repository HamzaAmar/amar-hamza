import Image from 'next/image';
import { CodeContainer, Hello, Highlight } from '..';

console.log(Highlight);

const components = {
  Image,
  // code: CodeContainer,
  code: (props: any) => <Highlight {...props} />,
  pre: ({ children, props }) => (
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
