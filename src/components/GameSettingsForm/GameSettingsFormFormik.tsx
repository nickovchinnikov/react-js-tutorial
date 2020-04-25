import React from "react";
import { GameSettingsFormProps } from "./interfaces";
import { Formik, Form, Field } from "formik";

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
            <fieldset>
              <legend>Player 1</legend>
              <Field type="text" name="player1.name" />
              <Field type="color" name="player1.color" />
              <Field name="player1.symbol" as="select">
                <option>X</option>
                <option>Y</option>
                <option>O</option>
              </Field>
            </fieldset>
            <fieldset>
              <legend>Player 2</legend>
              <Field type="text" name="player2.name" required />

              <Field type="color" name="player2.color" />
              <Field name="player2.symbol" as="select">
                <option>X</option>
                <option>Y</option>
                <option>O</option>
              </Field>
            </fieldset>

            <button>Start</button>
          </fieldset>
        </Form>
      </Formik>
    );
  }
}
