// import { Table, Alert, TableColumn, TableRow } from '@pillar-ui/core'
// import React from 'react'

// import type Image from 'next/image'
// import type { ImageProps } from 'next/image'
// import type Link from 'next/link'
// import type { LinkProps } from 'next/link'

// import type { MDXRemote } from 'next-mdx-remote/rsc'
// import { highlight } from 'sugar-high'
// import { toSlug } from '~/utils/slug'
// import { Colors } from '../colors'
// import { type DocsCode, Playground } from '../code'

// type CustomLinkProps = {} & Omit<LinkProps, 'href'> & React.AnchorHTMLAttributes<HTMLAnchorElement>

// function getStringFromChildren(children: React.ReactNode): string | null {
//   if (React.isValidElement(children) && children.type === 'code') {
//     return children.props.children
//   }
//   return null
// }

// function CustomLink(props: CustomLinkProps) {
//   const href = props.href!

//   if (href.startsWith('/')) {
//     return (
//       <Link href={href} ...props>props.children
//       </Link>
//     )
//   }

//   if (href.startsWith('#')) {
//     return <a {...props} />
//   }

//   return <a target="_blank" rel="noopener noreferrer" ...props/>
// }

// interface RoundedImageProps extends Omit<ImageProps, 'alt'> {
//   altText: string
// }
// function RoundedImage(props: RoundedImageProps) {
//   return <Image alt={props.altText} ...props/>
// }

// async function Code({ children, ...props }: { children: string; className: string }) {
//   const code = getStringFromChildren(children)
//   if (code === null) return <pre {...props}>{children}</pre>
//   const codeHTML = highlight(code)

//   return <DocsCode code={code} html={codeHTML} />
// }

// function createHeading(level: number) {
//   const Heading = ({ children }: { children: string }) => {
//     const slug = toSlug(children)
//     return React.createElement(
//       `h${level}`,
//       { id: slug },
//       [
//         React.createElement('a', {
//           href: `#${slug}`,
//           key: `link-${slug}`,
//           className: 'anchor scroll-pt-36',
//         }),
//       ],
//       children
//     )
//   }

//   Heading.displayName = `Heading${level}`

//   return Heading
// }

// let components = {
//   h1: createHeading(1),
//   h2: createHeading(2),
//   h3: createHeading(3),
//   h4: createHeading(4),
//   h5: createHeading(5),
//   h6: createHeading(6),
//   a: CustomLink,
//   pre: Code,
//   Table,
//   TableColumn,
//   TableRow,
//   Playground,
//   Colors,
//   Alert,
// }

// export function CustomMDX(props: any) {
//   return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
// }

import type { ImageProps } from 'next/image';
import type { LinkProps } from 'next/link';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import { slugify } from '@utils/slugify';
import { Conversation } from '../conversation';
import { Button } from '../button';
import { DocsCode } from '../code';
import { Alert } from '../alert';

type CustomLinkProps = {} & Omit<LinkProps, 'href'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

function getStringFromChildren(
  children: React.ReactNode,
): string | null {
  if (React.isValidElement(children) && children.type === 'code') {
    return children.props.children;
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

// async function Code({
//   children,
//   className,
//   ...props
// }: {
//   children: string;
//   className: string;
// }) {
//   const codeHTML = highlight(children);

//   return (
//     <code
//       className={`${className} code--section`}
//       // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
//       dangerouslySetInnerHTML={{ __html: codeHTML }}
//       {...props}
//     />
//   );
// }

async function Code({
  children,
  ...props
}: {
  children: string;
  className: string;
}) {
  const code = getStringFromChildren(children);
  if (code === null) return <pre {...props}>{children}</pre>;
  const html = highlight(code);

  return <DocsCode html={html} />;
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
