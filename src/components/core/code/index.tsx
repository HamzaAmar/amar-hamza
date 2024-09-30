import type { DocsCodeProps } from './code.type';

export const DocsCode = ({ html }: DocsCodeProps) => {
  return (
    <div className="code--section">
      <div className="code--header">
        <div className="dot" />
      </div>

      <pre className="doc-pre">
        <code
          className="doc-code"
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
};
