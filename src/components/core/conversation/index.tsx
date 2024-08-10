import React, { Children, ReactNode } from 'react';
import {
  Browser,
  Server,
  Speaker,
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
  narrator: <Speaker width="24" />,
  me: <User width="24" />,
};

const Message = ({ children, from }: ThreadProps) => {
  return (
    <div className={`t-h-msg t-h-msg__${from} l_f_3xs`}>
      <p className="t-h-user">{from}</p>
      <div>{children}</div>
    </div>
  );
};

const Thread = ({ from, children }: ThreadProps) => {
  return (
    <article data-from={from} className="thread">
      <div className="t-h-hdr l_f_3xs">
        <div className="t-h-avt u_circle u_center">{LOGO[from]}</div>
      </div>
      <div className="t-h-msg--container">
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
    <section className="c-o">
      <header className="c-o-hdr">
        <div className="c-o-avt u_circle u_center">
          <Users width="32" strokeWidth={1.5} />
        </div>
        <div>
          <Text weight="medium">Web Development Group</Text>
          <Text size="sm" color="b" contrast="low">
            Me , Server , Browser, CDN, Narrator
          </Text>
        </div>
      </header>
      <div className="c-o-body l_f_sm">{children}</div>
    </section>
  );
};

Conversation.Thread = Thread;
