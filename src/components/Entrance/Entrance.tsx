import React, { useState, useCallback } from "react";

// export const Entrance: React.FC<{ defaultValue: string }> = ({
//   defaultValue,
// }) => {
//   const [value, setValue] = useState(defaultValue);
//   const onChange = useCallback(
//     (ev) => {
//       setValue(ev.target.value.toUpperCase());
//     },
//     [setValue]
//   );
//   return <input type="text" value={value} onChange={onChange} />;
// };
export class Entrance extends React.Component<{ defaultValue: string }, {}> {
  state = {
    value: this.props.defaultValue,
  };

  setValue = (ev: { target: HTMLInputElement }) =>
    this.setState({ value: ev.target.value.toUpperCase() });

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.setValue} />
    );
  }
}
