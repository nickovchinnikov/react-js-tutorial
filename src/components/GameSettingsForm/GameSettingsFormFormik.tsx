import React from "react";
import { GameSettingsFormProps } from "./interfaces";
import { Formik, Form, Field } from "formik";

type PlayerType = { name: string; color: string; symbol: string };

const initialFormProps = {
  player1: {
    name: "Bob",
    color: "#eeeddd",
    symbol: "Y",
  },
  player2: {
    name: "Alice",
    color: "#73fa79",
    symbol: "O",
  },
} as const;

const getFieldset = (num: number, player: PlayerType) => {
  const { name, color } = player;
  return (
    <fieldset>
      <legend>{`Player: ${num}`}</legend>
      <Field type="text" name={name} />
      <Field type="color" name={color} />
      <Field name="player1.symbol" as="select">
        <option>X</option>
        <option>Y</option>
        <option>O</option>
      </Field>
    </fieldset>
  );
};

export class GameSettingsFormFormik extends React.Component<
  GameSettingsFormProps,
  {}
> {
  render() {
    return (
      <Formik initialValues={initialFormProps} onSubmit={this.props.onSubmit}>
        <Form>
          <fieldset>
            <legend>Game Settings</legend>
            {getFieldset(1, initialFormProps.player1)}
            {getFieldset(2, initialFormProps.player2)}
            <button>Start</button>
          </fieldset>
        </Form>
      </Formik>
    );
  }
}
