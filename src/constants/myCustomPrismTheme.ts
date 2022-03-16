import { PrismTheme } from 'prism-react-renderer';

const theme: PrismTheme = {
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
