import React, { useState, useEffect, FC } from "react";

export const StateComponent: FC = () => {
  const [, setName] = useState("Nikita");
  console.warn("re-render StateComponent");
  return (
    <button onClick={() => setName("Nikita")}>
      State Component with string Click!
    </button>
  );
};

export const StateComponentWithObj: FC = () => {
  const [, setName] = useState({ name: "Ivan" });
  console.warn("re-render StateComponentWithObj");
  return (
    <button onClick={() => setName({ name: "Ivan" })}>
      State Component with obj Click!!
    </button>
  );
};

const clickCallback = () => {
  console.warn("click");
};

export const StateComponentWithLifeCycle: FC = () => {
  const [name, setName] = useState("John");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn("didMount+didUpdate");
    document.addEventListener("click", clickCallback);
    return () => {
      document.removeEventListener("click", clickCallback);
    };
  }, [name]);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
        setName(`Ivan ${count}`);
      }}
    >
      State Component with string Click!
    </button>
  );
};
