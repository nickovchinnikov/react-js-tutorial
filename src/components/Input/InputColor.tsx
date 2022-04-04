import React from "react";

export const InputColor = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>((props, ref) => <input ref={ref} type="color" {...props} />);

InputColor.displayName = "InputColor";
