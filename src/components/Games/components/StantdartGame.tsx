import React from "react";

import { AccessChecker, InteractiveField, Field } from "@/components";

export const StantdartGame = () => (
  <AccessChecker>
    <InteractiveField
      xSize={3}
      ySize={3}
      playerMarks={["x", "y"]}
      fieldComponent={Field}
    />
  </AccessChecker>
);
