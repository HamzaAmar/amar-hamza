import { PrismTheme } from 'prism-react-renderer';

const theme: PrismTheme = {
  plain: {
    color: 'var(--color-grey-900)',
    backgroundColor: 'var(--color-grey-200)',
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
        color: 'var(--color-grey-600)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: 'var(--color-grey-800)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'var(--color-primary-200)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'var(--color-warning-300)',
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
        color: 'var(--color-primary-400)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'orange',
      },
    },
    {
      types: ['selector', 'doctype'],
      style: {
        color: 'var(--color-success-600)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['tag', 'operator', 'keyword'],
      style: {
        color: 'var(--color-success-800)',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'var(--color-danger)',
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
        color: 'var(--color-primary-300)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'white',
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
