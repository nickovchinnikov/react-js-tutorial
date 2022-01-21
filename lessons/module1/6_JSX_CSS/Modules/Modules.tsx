import React, { memo, useReducer } from "react";
import cn from "clsx";
import s from "./Modules.module.sass";

export type Props = {
  className?: string;
};

export const Modules = memo<Props>(({ className }) => {
  const [colored, toggleColored] = useReducer((v) => !v, false);
  return (
    <div className={cn(s.basis, className)}>
      <div>
        <div className={cn(s.title, colored && s.colored)}>Заголовок</div>
        <button onClick={toggleColored} className={s.button}>
          Сменить цвет
        </button>
      </div>
    </div>
  );
});

Modules.displayName = "Basis";
