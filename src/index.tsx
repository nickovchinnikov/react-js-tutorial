import React from "react";
import { render } from "react-dom";

import { InteractiveField, Field } from "./components";

render(
  <InteractiveField
    xSize={3}
    ySize={3}
    playerMarks={["x", "y"]}
    fieldComponent={Field}
  />,
  document.getElementById("root")
);
