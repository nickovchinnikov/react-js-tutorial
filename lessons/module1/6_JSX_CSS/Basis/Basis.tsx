import React, { memo, useState } from "react";
import cn from "clsx";
import "./Basis.css";

export type Props = {
  className?: string;
};

export const Basis = memo<Props>(({ className }) => {
  const [colored, setColored] = useState(false);
  return (
    <div className={cn("basis", className)}>
      <div>
        <div className={cn("basis__title", { basis__title_colored: colored })}>
          Заголовок
        </div>
        <button onClick={() => setColored((v) => !v)} className="basis__button">
          Сменить цвет
        </button>
      </div>
    </div>
  );
});

Basis.displayName = "Basis";
