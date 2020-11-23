import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { ChatComponent } from "./Chat";
import { actions } from "./reducer";

export default {
  title: "ChatComponent",
  decorators: [withKnobs],
};

export const ChatComponentExample = () => (
  <ChatComponent
    chat={[{ author: "N", message: "Test" }]}
    username={text("A", "N")}
    send={action("SendAction") as typeof actions.send}
  />
);
