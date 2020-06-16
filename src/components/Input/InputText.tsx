import React from "react";

export const InputText = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>((props, ref) => <input ref={ref} type="text" {...props} />);

InputText.displayName = "InputText";
