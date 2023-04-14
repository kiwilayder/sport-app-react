import React, { useState } from "react";
import style from "./StartTrening.module.css";
import { Button } from "antd";
import { Repeats } from "../Repeats/Repeats";
import { Exercise } from "../Exercise/Exercise";

export const StartTrening = ({ approach, textTraning, contextHolder }) => {
   const [exercise, setExercise] = useState(null);

   if (exercise) return <Exercise exercise={exercise} />;

   return (
      <div className={style.trening}>
         <div className={style.dayBlock}>
            <span onClick={() => setExercise(approach[0])} className={style.day}>
               День 1
            </span>
            <div className={style.repeats}>
               {approach[0].map((el, i) => (
                  <Repeats key={i} repeats={el} />
               ))}
            </div>
         </div>

         <span className={style.rest}>Отдых 1 день</span>

         <div className={style.dayBlock}>
            <span onClick={() => setExercise(approach[1])} className={style.day}>
               День 2
            </span>
            <div className={style.repeats}>
               {approach[1].map((el, i) => (
                  <Repeats key={i} repeats={el} />
               ))}
            </div>
         </div>

         <span className={style.rest}>Отдых 1 день</span>

         <div className={style.dayBlock}>
            <span onClick={() => setExercise(approach[2])} className={style.day}>
               День 3
            </span>
            <div className={style.repeats}>
               {approach[2].map((el, i) => (
                  <Repeats key={i} repeats={el} />
               ))}
            </div>
         </div>

         <span className={style.rest}>Отдых 1 день</span>

         <div className={style.finalTest}>
            <span>Выполните максимальное количество {textTraning}</span>
            <Button className={style.buttonTest}>Итоговый тест</Button>
         </div>
      </div>
   );
};
