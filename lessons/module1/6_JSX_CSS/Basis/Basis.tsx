import React, { memo, useReducer } from "react";
import cn from "clsx";
import "./Basis.sass";

export type Props = {
  className?: string;
};

export const Basis = memo<Props>(({ className }) => {
  const [colored, toggleColored] = useReducer((v) => !v, false);
  return (
    <div className={cn("basis", className)}>
      <div>
        <div className={cn("basis__title", colored && "basis__title_colored")}>
          Заголовок
        </div>
        <button onClick={toggleColored} className={"basis__button"}>
          Сменить цвет
        </button>
      </div>
    </div>
  );
});

Basis.displayName = "Basis";
