import React, { useState, ComponentType } from "react";
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
  return (
    <DemoFormWrapper>
      <h2>{title}</h2>
      <FormComponent onSubmit={setResult} />
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </DemoFormWrapper>
  );
};

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const forms = () => (
  <StoryWrapper>
    <DemoForm FormComponent={GameSettingsFormDOM} title="GameSettingsFormDOM" />
    <DemoForm FormComponent={GameSettingsFormRef} title="GameSettingsFormRef" />
    <DemoForm
      FormComponent={GameSettingsFormState}
      title="GameSettingsFormState"
    />
    <DemoForm
      FormComponent={GameSettingsFormFormik}
      title="GameSettingsFormFormik"
    />
  </StoryWrapper>
);
