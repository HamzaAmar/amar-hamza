// import type { PrismTheme } from '../types';

// var theme: PrismTheme = {
//   plain: {
//     color: '#393A34',
//     backgroundColor: '#f6f8fa',
//   },
//   styles: [
//     {
//       types: ['comment', 'prolog', 'doctype', 'cdata'],
//       style: {
//         color: '#999988',
//         fontStyle: 'italic',
//       },
//     },
//     {
//       types: ['namespace'],
//       style: {
//         opacity: 0.7,
//       },
//     },
//     {
//       types: ['string', 'attr-value'],
//       style: {
//         color: '#e3116c',
//       },
//     },
//     {
//       types: ['punctuation', 'operator'],
//       style: {
//         color: '#393A34',
//       },
//     },
//     {
//       types: [
//         'entity',
//         'url',
//         'symbol',
//         'number',
//         'boolean',
//         'variable',
//         'constant',
//         'property',
//         'regex',
//         'inserted',
//       ],
//       style: {
//         color: '#36acaa',
//       },
//     },
//     {
//       types: ['atrule', 'keyword', 'attr-name', 'selector'],
//       style: {
//         color: '#00a4db',
//       },
//     },
//     {
//       types: ['function', 'deleted', 'tag'],
//       style: {
//         color: '#d73a49',
//       },
//     },
//     {
//       types: ['function-variable'],
//       style: {
//         color: '#6f42c1',
//       },
//     },
//     {
//       types: ['tag', 'selector', 'keyword'],
//       style: {
//         color: '#00009f',
//       },
//     },
//   ],
// };

// export default theme;

import { PrismTheme } from 'prism-react-renderer';

var theme: PrismTheme = {
  plain: {
    color: 'var(--warning-color)',
    backgroundColor: 'var(--color-background-dark)',
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'red',
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: '#f92672',
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'rgb(173, 219, 103)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#8292a2',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: 'var(--success-color)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'var(--purple-color)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'var(--danger-color)',
      },
    },
    {
      types: [
        'builtin',
        'char',
        'constant',
        'function',
        'class-name',
      ],
      style: {
        color: 'var(--color-primary-dark)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'var(--purple-color)',
      },
    },
    {
      types: ['selector', 'doctype'],
      style: {
        color: 'var(--success-color)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['tag', 'operator', 'keyword'],
      style: {
        color: 'var(--blue-color)',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'var(--danger-color)',
      },
    },
    {
      types: ['namespace'],
      style: {
        color: 'rgb(178, 204, 214)',
        opacity: 0.7,
      },
    },
    {
      types: ['tag', 'property'],
      style: {
        color: '#f92672',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'var(--success-color) !important',
      },
    },
    {
      types: ['doctype'],
      style: {
        color: '#8292a2',
      },
    },
    {
      types: ['rule'],
      style: {
        color: '#e6db74',
      },
    },
  ],
};

export default theme;
