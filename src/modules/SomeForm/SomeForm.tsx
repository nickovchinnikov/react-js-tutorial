import React, { useState, useRef } from "react";
import { Validator } from "./validator";

export const SomeForm = () => {
  const [username, setUsername] = useState("");
  const validatorRef = useRef<Validator>(new Validator());

  const setUsernameWithValidation = (value: string) => {
    const validator = validatorRef.current;
    setUsername(value);
    validator.updateField("username", value);

    validator.checkIsNotEmpty("username");

    if (validator.hasErrors()) {
      return;
    }

    validator.checkIsAlphanumeric("username");
  };

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validatorRef.current.hasErrors()) {
      console.error("validation errors", validatorRef.current.errors);
      return;
    }

    // eslint-disable-next-line no-console
    console.log("form submitted", { username });
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsernameWithValidation(e.currentTarget.value)}
      />
      {validatorRef.current.hasErrors() && (
        <span style={{ color: "red" }}>
          {validatorRef.current?.errors["username"]?.message}
        </span>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
