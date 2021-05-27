import * as React from 'react';

function instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <linearGradient
        id="prefix__a"
        gradientTransform="matrix(0 -1.982 -1.844 0 -132.52 -51.08)"
        gradientUnits="userSpaceOnUse"
        x1={-37.11}
        x2={-26.55}
        y1={-72.7}
        y2={-84.05}
      >
        <stop offset={0} stopColor="#fd5" />
        <stop offset={0.5} stopColor="#ff543e" />
        <stop offset={1} stopColor="#c837ab" />
      </linearGradient>
      <path
        d="M1.5 1.63C-.39 3.6 0 5.67 0 12c0 5.25-.92 10.5 3.88 11.75 1.5.38 14.76.38 16.25 0 2-.52 3.62-2.14 3.85-4.96.03-.4.03-13.19 0-13.59-.24-3-2.1-4.74-4.53-5.09-.56-.08-.67-.1-3.54-.11C5.74 0 3.51-.45 1.5 1.63z"
        fill="url(#prefix__a)"
      />
      <path
        d="M12 3.14c-3.63 0-7.08-.32-8.4 3.06-.54 1.4-.46 3.2-.46 5.8 0 2.28-.08 4.42.46 5.8 1.32 3.39 4.8 3.06 8.4 3.06 3.47 0 7.06.37 8.4-3.05.54-1.41.46-3.2.46-5.8 0-3.47.19-5.7-1.5-7.38-1.7-1.7-4-1.5-7.37-1.5zm-.8 1.6c7.58-.02 8.54-.86 8.01 10.84-.19 4.14-3.34 3.68-7.21 3.68-7.06 0-7.26-.2-7.26-7.26 0-7.15.56-7.26 6.46-7.27zm5.53 1.47a1.06 1.06 0 100 2.12 1.06 1.06 0 000-2.12zM12 7.45a4.55 4.55 0 100 9.1 4.55 4.55 0 000-9.1zm0 1.6c3.9 0 3.9 5.9 0 5.9s-3.91-5.9 0-5.9z"
        fill="#fff"
      />
    </svg>
  );
}

export default instagram;
