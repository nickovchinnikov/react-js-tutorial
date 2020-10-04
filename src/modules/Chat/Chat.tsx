import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { isEmpty } from "ramda";

import { TicTacToeGameState } from "@/store";

import { MessageComponent } from "./Message";
import { actions } from "./reducer";

const mapStateToProps = ({ chat, login }: TicTacToeGameState) => ({
  chat,
  ...login,
});

const mapDispatchToProps = {
  send: actions.send,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const ChatComponent: React.FC<Props> = ({ chat, username, send }) => {
  const [message, setMsg] = useState("");
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (!isEmpty(message)) {
        send({ message, author: username });
        setMsg("");
      }
    },
    [message, username, send]
  );

  const onChange = useCallback(async (ev) => {
    ev.preventDefault();
    const message = (ev.target as HTMLInputElement).value;
    if (!isEmpty(message)) {
      setMsg(message);
    }
  }, []);

  return !isEmpty(username) ? (
    <>
      {chat.map(({ author, message }, idx) => (
        <MessageComponent key={`${author}_${message}_${idx}`} author={author}>
          {message}
        </MessageComponent>
      ))}
      <form onSubmit={onSubmit}>
        <label>
          Message:
          <input
            placeholder="Enter your msg"
            value={message}
            onChange={onChange}
            required
            minLength={4}
            maxLength={10}
          />
        </label>
        <button>Send</button>
      </form>
    </>
  ) : null;
};

export const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
