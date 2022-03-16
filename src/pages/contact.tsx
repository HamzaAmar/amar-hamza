import { Layout } from '@components/common';
import {
  Call,
  Email,
  Message,
  Send,
  User,
  Pen,
} from '@components/icons';
import { Button, Input, Textarea } from '@components/core';
import React from 'react';
import styles from '@styles/contact.module.css';
import { useForm } from '@hooks/useForm';
import { Social } from '@components/ui';
import { Main } from 'next/document';

interface Data {
  message: string;
}

interface State {
  data: Data | null;
  error: Error | null;
  status: 'idle' | 'loading' | 'success' | 'error';
}
interface Fetching {
  type: 'fetching';
}
interface Fetched {
  type: 'fetched';
  data: Data;
}
interface ErrorType {
  type: 'error';
  error: Error;
}

interface InitialValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Action = Fetching | Fetched | ErrorType;

function fetchReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'fetching': {
      return { data: null, error: null, status: 'loading' };
    }
    case 'fetched': {
      return { data: action.data, error: null, status: 'success' };
    }
    case 'error': {
      return { data: null, error: action.error, status: 'error' };
    }
    default:
      throw new Error(`Unsupported type`);
  }
}

const Contact = () => {
  const { onChange, onSubmit, values } = useForm<InitialValue>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  const [state, dispatch] = React.useReducer(fetchReducer, {
    data: null,
    error: null,
    status: 'idle',
  });
  const message = state.data ? state.data.message : null;

  const handleSubmit = (values: InitialValue) => {
    dispatch({ type: 'fetching' });
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res: any) => (res.ok ? res : Promise.reject(res)))
      .then(
        async (response) => {
          const data = await response.json();
          dispatch({ type: 'fetched', data });
        },
        (error) => {
          try {
            dispatch({
              type: 'error',
              error,
            });
          } catch (_ignore) {
            // we tried to parse the response... But no dice so...
            dispatch({ type: 'error', error });
          }
        },
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout title="Contact Page">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titleContainer}>
            <h1 className={styles.heading}>get in touch</h1>

            <p className={styles.paragraph}>
              Fill up this form if you wanna hire me or ask me some
              question and am gonna be happy to answer
            </p>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.itemInfo}>
              <Call width={20} />
              <div className={styles.infoParagraph}>
                +212 6 3037 1320
              </div>
            </div>
            <div className={styles.itemInfo}>
              <Email width={20} />
              <div className={styles.infoParagraph}>
                hamzamiloudamar@gmail.com
              </div>
            </div>
            <div className={styles.itemInfo}>
              <Pen width={20} />
              <div className={styles.infoParagraph}>
                Morocco Marrakesh
              </div>
            </div>
          </div>
          <Social />
        </div>
        <div className={styles.right}>
          <div>{message}</div>
          <form
            onSubmit={(event: any) => onSubmit(event, handleSubmit)}
            className={styles.form}
          >
            <div className={styles.inputContainer}>
              <Input
                name="name"
                label="Name"
                onChange={onChange}
                placeholder="type your name"
                icon={<User />}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                name="email"
                label="Email"
                type="email"
                onChange={onChange}
                // leftIcon={}
                placeholder="type your name"
                required
                icon={<Email />}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                name="subject"
                label="Subject"
                onChange={onChange}
                placeholder="type your name"
                required
                icon={<Message width={22} />}
              />
            </div>
            <div className={styles.inputContainer}>
              <Textarea
                name="message"
                label="Message"
                onChange={onChange}
                placeholder="type your Message"
                required
                icon={<Message />}
              />
            </div>
            <div className={styles.inputContainer}>
              <Button
                status={state.status}
                icon={<Send width="15" fill="currentColor" />}
              >
                Contact
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
