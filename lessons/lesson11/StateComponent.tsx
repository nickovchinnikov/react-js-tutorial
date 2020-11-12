import React, { useState, useEffect } from "react";

export const StateComponent = () => {
  const [, setName] = useState("Nikita");
  console.warn("re-render StateComponent");
  return (
    <button onClick={() => setName("Nikita")}>
      State Component with string Click!
    </button>
  );
};

export const StateComponentWithObj = () => {
  const [, setName] = useState({ name: "Ivan" });
  console.warn("re-render StateComponentWithObj");
  return (
    <button onClick={() => setName({ name: "Ivan" })}>
      State Component with obj Click!!
    </button>
  );
};

export const StateComponentWithLifeCycle = () => {
  const [name, setName] = useState("John");

  useEffect(() => {
    console.warn("didMount+didUpdate");
    return () => {
      console.warn("willUnmount");
    };
  }, [name]);

  console.warn("re-render StateComponentWithLifeCycle");
  return (
    <button onClick={() => setName("Ivan")}>
      State Component with string Click!
    </button>
  );
};
