import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  const { width = '20', height = '20' } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M32 0l40.8 460.8L256 512l183.136-51.168L480 0z" />
      <path d="M392.768 150.688l-5.152 57.888-15.552 173.536L256 414.208l-.096.032-116-32.128-8.096-90.752h56.832l4.224 47.072 63.072 17.024.032-.032 63.168-17.024 8.608-78.432-198.656.544-5.632-53.632 209.056-2.464 4.224-57.408-218.88.608-3.68-53.408h283.648z" />
    </svg>
  );
}

export default SvgComponent;
