import React from "react";
import style from "./EmptyTrening.module.css";

export const EmptyTrening = () => {
   return (
      <div className={style.empty}>
         <span className={style.text}>Выбирите тренировку...</span>
      </div>
   );
};
