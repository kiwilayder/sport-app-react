import React from "react";
import style from "./EmptyTraining.module.css";

export const EmptyTraning = () => {
   return (
      <div className={style.empty}>
         <span className={style.text}>Выбирите тренировку...</span>
      </div>
   );
};
