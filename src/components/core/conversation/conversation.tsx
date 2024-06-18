import React, { ReactNode } from 'react';
import { Browser, Server, User } from '@components/icons';

interface ThreadProps {
  from: 'browser' | 'server' | 'user';
  message: string | string[];
}

interface ConversationProps {
  children: ReactNode;
}

const LOGO = {
  user: <User width="24" />,
  server: <Server width="24" />,
  browser: <Browser width="24" />,
};

const Message = ({ message, from }: ThreadProps) => {
  return (
    <div
      className={`thread--message thread--message__${from} l_flow__2xs`}
    >
      <p className="thread--user">{from}</p>
      <p>{message}</p>
    </div>
  );
};

const Thread = ({ from, message }: ThreadProps) => {
  return (
    <article data-from={from} className="thread">
      <div className="thread--header l_flow__3xs">
        <div className="thread--avatar u_circle u_center">
          {LOGO[from]}
        </div>
      </div>
      <div className="thread-message--container">
        {Array.isArray(message) ? (
          message.map((msg) => (
            <Message key={msg} message={msg} from={from} />
          ))
        ) : (
          <Message message={message} from={from} />
        )}
      </div>
    </article>
  );
};

export const Conversation = ({ children }: ConversationProps) => {
  return <div className="conversation l_flow__sm">{children}</div>;
};

Conversation.Thread = Thread;
