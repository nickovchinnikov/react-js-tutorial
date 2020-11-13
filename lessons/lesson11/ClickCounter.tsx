import React, { FC, useState, useEffect } from "react";

interface Props {
  defaultCount?: number;
}

export const ClickCounter: FC<Props> = ({ defaultCount = 0 }) => {
  const [count, setCount] = useState(defaultCount);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} times`;
  });

  return (
    <div>
      <h1 data-testid="counter">Counter: {count}</h1>
      <button data-testid="increase-btn" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};
