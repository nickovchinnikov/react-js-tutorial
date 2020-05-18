import React, { useState } from "react";
import { isNotEmpty, isAlphanumeric } from "./validator.final";

export const SomeForm = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState<Error | undefined>(
    undefined
  );

  const setUsernameWithValidation = (value: string) => {
    setUsername(value);

    if (!isNotEmpty(value)) {
      setUsernameError(new Error("username is required"));
    } else if (!isAlphanumeric(value)) {
      setUsernameError(new Error("username must be alphanumeric"));
    } else {
      setUsernameError(undefined);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (usernameError) {
      console.error("validation errors", { usernameError });
      return;
    }

    // eslint-disable-next-line no-console
    console.log("form submitted", { username });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsernameWithValidation(e.currentTarget.value)}
      />
      {!!usernameError && (
        <span style={{ color: "red" }}>{usernameError.message}</span>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
