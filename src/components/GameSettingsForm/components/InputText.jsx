import React from "react";

export const InputText =
  React.Component >
  ((props, ref) => <input ref={ref} type="text" {...props} />);

InputText.displayName = "InputText";
