import React from "react";

import { ErrorBoundary } from "@/components";
import { Login, Background } from "@/modules";

export const SignIn = () => (
  <ErrorBoundary>
    <Login />
    <Background />
  </ErrorBoundary>
);
