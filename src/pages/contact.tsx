import { Layout } from '@components/core';
import {
  Call,
  Email,
  Facebook,
  Github,
  Instagram,
  Linkdin,
  Send,
  Twitter,
} from '@components/icons';
import { Button, Input, Textarea } from '@components/ui';
import React from 'react';
import styles from '@styles/contact.module.css';
import { useForm } from '@hooks/useForm';

interface Data {
  message: string;
}

interface State {
  data: Data | null;
  error: Error | null;
  status: 'idle' | 'loading' | 'success' | 'error';
}
type Fetching = {
  type: 'fetching';
};
type Fetched = {
  type: 'fetched';
  data: Data;
};
type ErrorType = {
  type: 'error';
  error: Error;
};

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

const contact = () => {
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

  const handleSubmit = async (values: InitialValue) => {
    dispatch({ type: 'fetching' });
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((r) => (r.ok ? r : Promise.reject(r)))
      .then(
        async (response) => {
          const data = await response.json();
          dispatch({ type: 'fetched', data });
        },
        async (error) => {
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
      );
  };

  return (
    <Layout title="Contact Page">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titleContainer}>
            <h1 className={styles.heading}>get in touch</h1>

            <p className={styles.paragraph}>
              Fill up this form and am gonna be happy to answer
            </p>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.itemInfo}>
              <Call
                width={20}
                height={20}
                fill="var(--color-primary-light)"
              />
              <div className={styles.infoParagraph}>
                +212 6 3037 1320
              </div>
            </div>
            <div className={styles.itemInfo}>
              <Email
                width={20}
                height={20}
                fill="var(--color-primary-light)"
              />
              <div className={styles.infoParagraph}>
                hamzamiloudamar@gmail.com
              </div>
            </div>
            <div className={styles.itemInfo}>
              <Call
                width={20}
                height={20}
                fill="var(--color-primary-light)"
              />
              <div className={styles.infoParagraph}>
                Morocco Marrakesh
              </div>
            </div>
          </div>
          <div className={styles.socialContainer}>
            <a href="https://www.facebook.com" target="_blank">
              <Facebook width={25} height={25} />
            </a>
            <a
              href="https://twitter.com/HamzaMiloudAma1"
              target="_blank"
            >
              <Twitter width={25} height={25} />
            </a>
            <a
              href="https://www.instagram.com/amar_dev_js"
              target="_blank"
            >
              <Instagram width={25} height={25} />
            </a>
            <a href="https://github.com/HamzaAmar" target="_blank">
              <Github width={25} height={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-miloud-amar-463b24167"
              target="_blank"
            >
              <Linkdin width={25} height={25} />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div>{state.data ? state.data.message : null}</div>
          <form
            onSubmit={(e) => onSubmit(e, handleSubmit)}
            className={styles.form}
          >
            <div className={styles.inputContainer}>
              <Input
                name="name"
                label="Name"
                onChange={onChange}
                placeholder="type your name"
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
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                name="subject"
                label="Subject"
                onChange={onChange}
                placeholder="type your name"
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <Textarea
                name="message"
                label="Message"
                onChange={onChange}
                placeholder="type your Message"
                required
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

export default contact;
