import React, { Children, ReactNode } from 'react';
import {
  Browser,
  Server,
  User,
  Users,
  World,
} from '@components/icons';
import { Text } from '../typography';

interface ThreadProps {
  from: 'browser' | 'server' | 'user';
  children: ReactNode;
}

interface ConversationProps {
  children: ReactNode;
}

const LOGO = {
  user: <User width="24" />,
  server: <Server width="24" />,
  browser: <Browser width="24" />,
  cdn: <World width="24" />,
};

const Message = ({ children, from }: ThreadProps) => {
  return (
    <div
      className={`thread--message thread--message__${from} l_flow__3xs`}
    >
      <p className="thread--user">{from}</p>
      <div>{children}</div>
    </div>
  );
};

const Thread = ({ from, children }: ThreadProps) => {
  return (
    <article data-from={from} className="thread">
      <div className="thread--header l_flow__3xs">
        <div className="thread--avatar u_circle u_center">
          {LOGO[from]}
        </div>
      </div>
      <div className="thread-message--container">
        {Children.count(children) > 1 ? (
          Children.map(children, (child, index) => (
            <Message key={index} children={child} from={from} />
          ))
        ) : (
          <Message children={children} from={from} />
        )}
      </div>
    </article>
  );
};

export const Conversation = ({ children }: ConversationProps) => {
  return (
    <section className="conversation">
      <header className="conversation--header">
        <div className="header--avatar u_circle u_center">
          <Users width="32" strokeWidth={1.5} />
        </div>
        <div>
          <Text weight="medium">Web Development Group</Text>
          <Text size="sm" color="slate" contrast="low">
            Me , Server , Browser, CDN
          </Text>
        </div>
      </header>
      <div className="conversation--body l_flow__sm">{children}</div>
    </section>
  );
};

Conversation.Thread = Thread;
