import {
  Call,
  Email,
  Facebook,
  Github,
  Instagram,
  Linkdin,
  Twitter,
} from '@components/icons';
import { Button, Input, TextArea } from '@components/ui';
import React from 'react';
import styles from '@styles/contact.module.css';
import { Layout } from '@components/core';

const contact = () => {
  return (
    <Layout>
      <div className={styles.parent}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div>
              <h1>get in touch</h1>
              <p>Fill up this form and am gonna be happy to answer</p>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.itemInfo}>
                <Call
                  width={20}
                  height={20}
                  fill="var(--color-primary-light)"
                />
                <div className={styles.infoParagraph}>Hello</div>
              </div>
              <div className={styles.itemInfo}>
                <Email
                  width={20}
                  height={20}
                  fill="var(--color-primary-light)"
                />
                <div className={styles.infoParagraph}>Hello</div>
              </div>
              <div className={styles.itemInfo}>
                <Call
                  width={20}
                  height={20}
                  fill="var(--color-primary-light)"
                />
                <div className={styles.infoParagraph}>Hello</div>
              </div>
            </div>
            <div className={styles.socialContainer}>
              <Facebook width={25} height={25} />
              <Twitter width={25} height={25} />
              <Instagram width={25} height={25} />
              <Github width={25} height={25} />
              <Linkdin width={25} height={25} />
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <Input name="hello" label="helllo" />
            </div>
            <div>
              <Input name="hello" label="helllo" />
            </div>
            <div>
              <Input name="hello" label="helllo" />
            </div>
            <div>
              <TextArea name="hello" label="helllo" />
            </div>
            <div>
              <Button>Hello</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
