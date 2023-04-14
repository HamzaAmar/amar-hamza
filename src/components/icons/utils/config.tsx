import { SvgType, Rotation } from './types';

export const svgProps = {
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
} as SvgType;

export const ROTATION: Record<Rotation, string> = {
  left: '90',
  right: '-90',
  top: '180',
  bottom: '0',
  'left-top': '135',
  'left-bottom': '45',
  'right-top': '-135',
  'right-bottom': '-45',
};
