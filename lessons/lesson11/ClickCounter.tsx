import React, { useState, useEffect } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);

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
