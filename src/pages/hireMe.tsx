import React from 'react';
import { Layout } from '@components/core';
import styles from '../styles/hireMe.module.css';
import { Input, Textarea } from '@components/ui';

const hireMe = () => {
  return (
    <Layout>
      <div>
        <section className={styles.container}>
          <form className={styles.formContainer}>
            <h2 className={styles.heading}>
              Hello world my name is hamza
            </h2>
            <Input
              label="Subject"
              name="subject"
              placeholder="please type your subject"
            />
            <Input
              label="Name"
              name="name"
              placeholder="please type your Name"
            />
            <Input
              label="Email"
              name="email"
              placeholder="please type your Email"
            />
            <Textarea
              label="Message"
              name="message"
              placeholder="please type your Message"
            />
            <div className={styles.buttonWrapper}>
              <button>hireMe Me</button>
              <button> clear</button>
            </div>
          </form>
        </section>
        <section className={styles.container}>
          <h1 className={styles.heading}>Hellow orld 2</h1>
          <h1>HEllo </h1>
          <h1>HEllo </h1>
          <h1>HEllo </h1>
          <h1>HEllo </h1>
          <h1>HEllo </h1>
        </section>
      </div>
    </Layout>
  );
};

export default hireMe;
