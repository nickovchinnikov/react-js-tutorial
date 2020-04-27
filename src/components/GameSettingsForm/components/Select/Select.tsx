import React from "react";

interface SelectProps {
  options: Array<string>;
}

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.HTMLProps<HTMLSelectElement> & SelectProps
>((props, ref) => {
  const { options, ...selectProps } = props;
  return (
    <select ref={ref} {...selectProps}>
      {options.map((symbol) => (
        <option key={symbol}>{symbol}</option>
      ))}
    </select>
  );
});

Select.displayName = "Select";
