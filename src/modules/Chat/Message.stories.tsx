import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { MessageComponent } from "./Message";

export default {
  title: "MessageComponent",
  decorators: [withKnobs],
};

export const MessageComponentExample = () => [
  <MessageComponent key={1} author={text("Author", "Nikita")}>
    {text("Message", "Some Kind Of Message")}
  </MessageComponent>,
  <MessageComponent key={2} author={text("Author2", "Ivan")}>
    {text("Message2", "Yes, exactly!")}
  </MessageComponent>,
];
