import React, { useState, ComponentType } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameSettingsFormDOM } from "./GameSettingsFormDOM";
import { GameSettingsFormProps } from "src/components/GameSettingsForm/interfaces";

export default {
  title: "GameSettingsForm",
  decorators: [withKnobs],
};

interface DemoFormProps {
  title: string;
  FormComponent: ComponentType<GameSettingsFormProps>;
}

const DemoForm: React.FC<DemoFormProps> = ({ FormComponent, title }) => {
  const [result, setResult] = useState({});
  return (
    <>
      <h2>{title}</h2>
      <FormComponent onSubmit={setResult} />
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
};

export const forms = () => (
  <>
    <DemoForm FormComponent={GameSettingsFormDOM} title="GameSettingsFormDOM" />
  </>
);
