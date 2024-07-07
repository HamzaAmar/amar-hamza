import React from 'react';

import Image, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import { slugify } from '@utils/slugify';
import { Conversation } from './conversation';
import { Button } from './button';

type CustomLinkProps = {} & Omit<LinkProps, 'href'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

function CustomLink(props: CustomLinkProps) {
  let href = props.href!;

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
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
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
  className,
  ...props
}: {
  children: string;
  className: string;
}) {
  let codeHTML = highlight(children);

  console.log('Hello', props);

  return (
    <code
      className={`${className} code--section`}
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    let slug = slugify(children);
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

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Conversation,
  Button,
  Link,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
