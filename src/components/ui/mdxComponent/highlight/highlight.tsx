import React from 'react';
import BaseHighlight, { defaultProps } from 'prism-react-renderer';
import styles from './highlight.module.css';
import customTheme from '@constants/myCustomPrismTheme';

const highlight = ({ children, className, showLines, ...rest }) => {
  const codeString = children.trim();
  const language = className?.replace(/language-/, '');

  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language}
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
              const lineProps = getLineProps({ line, key: i });
              return (
                <div {...lineProps} className={styles.line}>
                  {showLines && (
                    <span className={styles.lineNumber}>
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span
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
