import React, { Component, FormEvent, ChangeEvent, ReactNode } from "react";
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

export type State = {
  message: string;
};

export class ChatComponent extends Component<Props, State> {
  state = { message: "" };

  onSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const { message } = this.state;
    const { username, send } = this.props;
    if (!isEmpty(message)) {
      send({ message, author: username });
      this.setState({ message: "" });
    }
  };

  onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const message = event.target.value;
    if (!isEmpty(message)) {
      this.setState({ message });
    }
  };

  render(): ReactNode {
    const { message } = this.state;
    const { username, chat } = this.props;

    return !isEmpty(username) ? (
      <>
        {chat.map(({ author, message }, idx) => (
          <MessageComponent key={`${author}_${message}_${idx}`} author={author}>
            {message}
          </MessageComponent>
        ))}
        <form onSubmit={this.onSubmit} role="form">
          <label>
            Message:
            <input
              placeholder="Enter your msg"
              value={message}
              onChange={this.onChange}
              required
              minLength={4}
              maxLength={10}
            />
          </label>
          <button>Send</button>
        </form>
      </>
    ) : null;
  }
}

export const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
