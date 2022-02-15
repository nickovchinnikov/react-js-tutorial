import React, { memo, useState } from "react";
import cn from "clsx";
import styles from "./Modules.module.sass";

export type Props = {
  className?: string;
};

export const Modules = memo<Props>(({ className }) => {
  const [colored, setColored] = useState(false);
  return (
    <div className={cn(styles.basis, className)}>
      <div>
        <div className={cn(styles.title, colored && styles.colored)}>
          Заголовок
        </div>
        <button onClick={() => setColored((v) => !v)} className={styles.button}>
          Сменить цвет
        </button>
      </div>
    </div>
  );
});

Modules.displayName = "Modules";
