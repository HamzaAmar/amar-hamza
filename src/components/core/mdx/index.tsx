import type { ImageProps } from 'next/image';
import type { LinkProps } from 'next/link';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import { slugify } from '@utils/slugify';
import { Alert, Button, Conversation, DocsCode } from '..';

type CustomLinkProps = {} & Omit<LinkProps, 'href'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface CodeProps {
  children: string;
  className: string;
}

function getStringFromChildren(children: React.ReactNode) {
  if (React.isValidElement(children) && children.type === 'code') {
    const prop = children.props as CodeProps;
    return {
      code: prop.children,
      language: prop.className.split('-')[1],
    };
  }
  return null;
}

function CustomLink(props: CustomLinkProps) {
  const href = props.href ?? '';

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
function Table({
  data,
}: {
  data: { headers: string[]; rows: string[][] };
}) {
  const headers = data.headers.map((header, index) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

interface RoundedImageProps extends Omit<ImageProps, 'alt'> {
  altText: string;
}
function RoundedImage(props: RoundedImageProps) {
  return <Image alt={props.altText} {...props} />;
}

async function Code({
  children,
  ...props
}: {
  children: string;
  className: string;
}) {
  const { code = '', language = '' } =
    getStringFromChildren(children) ?? {};
  if (code === null) return <pre {...props}>{children}</pre>;
  const html = highlight(code);

  return <DocsCode html={html} language={language} />;
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor scroll-pt-36',
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  image: RoundedImage,
  a: CustomLink,
  pre: Code,
  Table,
  Conversation,
  Button,
  Link,
  Alert,
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
