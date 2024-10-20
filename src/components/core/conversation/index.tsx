import React, { Children, type ReactNode } from 'react';
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
    <div className={`th-M th-M__${from} Sf-1`}>
      <Text size="4" weight="7" transform="uppercase" color="w" low>
        {from}
      </Text>
      <div>{children}</div>
    </div>
  );
};

const Thread = ({ from, children }: ThreadProps) => {
  return (
    <article data-from={from} className="th-">
      <div className="th-H Sf-1">
        <div className="th-A C Fc">{LOGO[from]}</div>
      </div>
      <div className="th-C">
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
    <section className="co-">
      <header className="co-H">
        <div className="th-A C Fc">
          <Users width="32" strokeWidth={1.5} />
        </div>
        <div>
          <Text size="4" weight="5">
            Web Development Group
          </Text>
          <Text size="4" color="b" low>
            Me , Server , Browser, CDN, Narrator
          </Text>
        </div>
      </header>
      <div className="co-B Sf-4">{children}</div>
    </section>
  );
};

Conversation.Thread = Thread;
