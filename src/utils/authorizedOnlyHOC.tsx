import React, { useState, useEffect, ComponentType } from "react";
import { isLoggedIn } from "@/api/auth";
import { Redirect } from "react-router-dom";

enum CheckState {
  initiated,
  succeed,
  failed,
}

export function authorizedOnlyHoc<P>(
  Component: ComponentType<P>,
  redirectPath = "/login"
) {
  return (props: P) => {
    const [isAuthorized, setIsAuthorized] = useState(CheckState.initiated);

    useEffect(() => {
      //https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435
      (async () => {
        const isAuthorized = await isLoggedIn();
        setIsAuthorized(isAuthorized ? CheckState.succeed : CheckState.failed);
      })();
    }, []);

    if (isAuthorized === CheckState.initiated) {
      return <div>Checking if user is authorized</div>;
    }

    if (isAuthorized === CheckState.failed) {
      return <Redirect to={redirectPath} />;
    }

    return <Component {...props} />;
  };
}
