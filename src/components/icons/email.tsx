import * as React from 'react';

function email(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M467 61H45C20 61 0 81 0 106v300c0 25 20 45 45 45h422c25 0 45-20 45-45V106c0-25-20-45-45-45zm-6 30L257 295 51 91h410zM30 400V112l144 143L30 400zm21 21l145-145 50 51c6 5 16 5 22 0l49-50 144 144H51zm431-21L338 256l144-144v288z" />
    </svg>
  );
}

export default email;
