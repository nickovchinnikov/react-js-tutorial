import React from "react";
import { InteractiveField, Field } from "@/components";
import { authorizedOnlyHoc } from "@/utils/authorizedOnlyHOC";

export const FieldScreen = authorizedOnlyHoc(() => (
  <InteractiveField
    xSize={3}
    ySize={3}
    playerMarks={["x", "y"]}
    fieldComponent={Field}
  />
));
