import React, { useCallback } from "react";

/**
 * см тесты в src/utils/withOnChangeValue.test.tsx
 * @param Component
 */
export const withOnChangeValue = <P extends object>(
  Component: React.ComponentType<P>
) => (
  props: P & {
    onChange?: (ev: React.ChangeEvent) => void;
    onChangeValue?: (newText: string) => void;
  }
) => {
  const onChange = useCallback(
    (ev: React.ChangeEvent) => {
      props.onChange && props.onChange(ev);
      props.onChangeValue &&
        props.onChangeValue((ev.target as HTMLInputElement).value);
    },
    [props.onChange, props.onChangeValue]
  );
  return <Component {...props} onChange={onChange} />;
};
