import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "@/api/auth";

export const LoginScreen: React.FC<{}> = () => {
  const [name, setName] = useState("");
  const history = useHistory();
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      await login(name);
      history.push(`/user/${name}`);
    },
    [name]
  );
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
        />
      </label>
      <button>Login</button>
    </form>
  );
};
