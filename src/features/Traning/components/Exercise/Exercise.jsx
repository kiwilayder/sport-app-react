import React, { useEffect, useState } from "react";
import style from "./Exercise.module.css";
import { Repeats } from "../Repeats/Repeats";
import { Button } from "antd";

export const Exercise = ({ exercise }) => {
   const [current, setCurrent] = useState(0);
   const [count, setCount] = useState(null);

   useEffect(() => {
      setCount(exercise[current]);
   }, [current]);

   return (
      <div className={style.mainFrame}>
         <h1 className={style.text}>Тренировка</h1>
         <div className={style.trening}>
            <div className={style.countFrame}>
               <button onClick={() => setCount((prev) => --prev)} className={style.sign}>
                  -
               </button>
               <div className={style.count}>{count}</div>
               <button onClick={() => setCount((prev) => ++prev)} className={style.sign}>
                  +
               </button>
            </div>
            <Button onClick={() => setCurrent((prev) => ++prev)} className={style.ready}>
               Готово
            </Button>

            <div className={style.sets}>
               {exercise.map((el, i) => (
                  <Repeats key={i} repeats={el} />
               ))}
            </div>
         </div>
      </div>
   );
};
