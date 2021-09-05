/* eslint-disable react/no-array-index-key */
import React from 'react';
import BaseHighlight, {
  defaultProps,
  Language,
} from 'prism-react-renderer';
import customTheme from '@constants/myCustomPrismTheme';

import styles from './highlight.module.css';

interface HighlightProps {
  children: string;
  className: string;
  showLines: string;
}

const highlight = ({
  children,
  className,
  showLines,
  ...rest
}: HighlightProps) => {
  const codeString = children.trim();
  const language = className.replace(/language-/, '');
  const lines = (i: number) =>
    showLines && <span className={styles.lineNumber}>{i + 1}</span>;

  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language as Language}
      theme={customTheme}
      {...rest}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <div className={styles.container}>
          <pre
            className={`${className} ${styles.pre}`}
            data-language={language}
            style={style}
          >
            {tokens.map((line, i) => {
              return (
                <div key={i} {...line} className={styles.line}>
                  {lines(i)}
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({ token, key })}
                      className={styles.lineContent}
                    />
                  ))}
                </div>
              );
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  );
};

export default highlight;
