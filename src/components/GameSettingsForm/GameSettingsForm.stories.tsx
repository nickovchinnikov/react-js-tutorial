import React, { useState, ComponentType, useRef, useCallback } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameSettingsFormDOM } from "./GameSettingsFormDOM";
import { GameSettingsFormRef } from "./GameSettingsFormRef";
import { GameSettingsFormState } from "./GameSettingsFormState";
import { GameSettingsFormFormik } from "./GameSettingsFormFormik";
import { GameSettingsFormProps } from "./interfaces";
import styled from "@emotion/styled";

export default {
  title: "GameSettingsForm",
  decorators: [withKnobs],
};

interface DemoFormProps {
  title: string;
  FormComponent: ComponentType<GameSettingsFormProps>;
}

const DemoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const DemoForm: React.FC<DemoFormProps> = ({ FormComponent, title }) => {
  const [result, setResult] = useState({});
  const formRef = useRef<any>();
  const submitForm = useCallback(() => {
    if (formRef.current && formRef.current?.handleSubmit) {
      formRef.current.handleSubmit({
        preventDefault: () => null,
      });
    }
  }, []);
  return (
    <DemoFormWrapper>
      <h2>{title}</h2>
      <FormComponent onSubmit={setResult} ref={formRef} />
      <button onClick={submitForm}>Submit form from outside</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </DemoFormWrapper>
  );
};

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

class StoryWrapperLayout extends React.Component<{
  columns: DemoFormProps[];
}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <StoryWrapper>
        {this.props.columns.map(({ FormComponent, title }) => (
          <DemoForm FormComponent={FormComponent} title={title} key={title} />
        ))}
      </StoryWrapper>
    );
  }
}

export const Forms = () => {
  const [title, setTitle] = useState("Forms demo");
  return (
    <>
      <h1>{title}</h1>
      <input value={title} onChange={(ev) => setTitle(ev.target.value)} />
      <StoryWrapperLayout
        columns={[
          {
            FormComponent: GameSettingsFormDOM,
            title: "GameSettingsFormDOM",
          },
          {
            FormComponent: GameSettingsFormRef,
            title: "GameSettingsFormRef",
          },
          {
            FormComponent: GameSettingsFormState,
            title: "GameSettingsFormState",
          },
          {
            FormComponent: GameSettingsFormFormik,
            title: "GameSettingsFormFormik",
          },
        ]}
      />
    </>
  );
};
