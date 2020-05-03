import React, { useState, useCallback } from "react";

export const Entrance: React.FC<{ defaultValue: string }> = ({
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback(
    (ev) => {
      setValue(ev.target.value.toUpperCase());
    },
    [setValue]
  );
  return <input type="text" value={value} onChange={onChange} />;
};
