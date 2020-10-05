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
    chat={[{ author: "Nikita", message: "Test message" }]}
    username={text("Author", "Nikita")}
    send={action("SendAction") as typeof actions.send}
  />
);
