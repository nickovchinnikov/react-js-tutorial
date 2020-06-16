import React from "react";

import { ErrorBoundary } from "@/components";
import { Login } from "@/modules";

export const SignIn = () => (
  <ErrorBoundary>
    <Login />
  </ErrorBoundary>
);
