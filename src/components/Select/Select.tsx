import React from "react";

interface SelectProps {
  options: Array<string>;
  label: string;
}

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.HTMLProps<HTMLSelectElement> & SelectProps
>((props, ref) => {
  const { options, label, ...selectProps } = props;
  return (
    <label>
      {label}
      <select ref={ref} {...selectProps}>
        {options.map((symbol) => (
          <option key={symbol}>{symbol}</option>
        ))}
      </select>
    </label>
  );
});

Select.displayName = "Select";
