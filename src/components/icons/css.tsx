import React, { CSSProperties, FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  style?: CSSProperties;
};

const css: FC<Props> = ({ width, height, style }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width={width}
      height={height}
      style={style}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <polygon
        style={{ fill: '#2196F3' }}
        points="32,0 72.8,460.8 256,512 439.136,460.832 480,0 "
      />
      <polygon
        style={{ fill: '#FAFAFA' }}
        points="392.768,150.688 387.616,208.576 372.064,382.112 256,414.208 255.904,414.24 
	139.904,382.112 131.808,291.36 188.64,291.36 192.864,338.432 255.936,355.456 255.968,355.424 319.136,338.4 327.744,259.968 
	129.088,260.512 123.456,206.88 332.512,204.416 336.736,147.008 117.856,147.616 114.176,94.208 256,94.208 397.824,94.208 "
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

css.defaultProps = {
  width: 20,
  height: 20,
};

export default css;
