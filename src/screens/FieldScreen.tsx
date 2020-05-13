import React from "react";
import { InteractiveField, Field } from "@/components";

export const FieldScreen = () => (
  <InteractiveField
    xSize={3}
    ySize={3}
    playerMarks={["x", "y"]}
    fieldComponent={Field}
  />
);
