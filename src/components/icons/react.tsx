import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path
      fill="none"
      d="M6.36 9C3.72 9.68 2 10.85 2 12.18 2 14.28 6.4 16 11.85 16c.74 0 1.26-.04 1.95-.1m-3.96 0c-.42-.6-.8-1.13-1.18-1.8C5.9 9.2 5.16 4.33 7.03 3.23c1.15-.7 3.04.25 4.97 2.25m-5.57 9.9c-.7 2.7-.56 4.72.56 5.4 1.78 1.08 5.39-1.96 8.04-6.8.36-.67.69-1.33.97-1.98m-4 6.52c1.93 2 3.82 2.95 4.98 2.25 1.85-1.1 1.12-5.97-1.63-10.87-.39-.68-.78-1.2-1.19-1.8m3.5 6.9c2.61-.69 4.34-1.85 4.34-3.18C22 9.72 17.6 8 12.15 8c-.74 0-1.26.03-1.95.09M8 12c.29-.66.6-1.3.97-1.98 2.64-4.84 6.25-7.89 8.04-6.8 1.11.68 1.27 2.7.56 5.4m-5.31 3.4h-.01a.26.26 0 0 1-.26.24.26.26 0 0 1-.25-.27c0-.13.11-.25.24-.25h-.01c.13 0 .25.12.25.24"
    />
  </svg>
);

export default SvgComponent;
