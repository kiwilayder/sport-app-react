import React, { useState } from "react";
import style from "./Exercise.module.css";
import { Repeats } from "../Repeats/Repeats";
import { Button } from "antd";
import { Timer } from "../Timer/Timer";

export const Exercise = ({ setStartTrening, exercise, setDayProgress }) => {
   const [current, setCurrent] = useState(0);
   const [count, setCount] = useState(exercise);
   const [timer, setTimer] = useState(false);
   console.log(current);
   const ready = (prevCurrent) => {
      if (prevCurrent !== count.length - 1) {
         setTimer(true);
         return ++prevCurrent;
      }
      setDayProgress(1);
      setStartTrening(false);
   };

   return (
      <div className={style.mainFrame}>
         <h1 className={style.text}>Тренировка</h1>

         {timer ? (
            <Timer setTimer={setTimer} />
         ) : (
            <div className={style.trening}>
               <div className={style.countFrame}>
                  <button
                     onClick={() => setCount((prev) => prev.map((p, i) => (i === current ? --p : p)))}
                     className={style.sign}
                  >
                     -
                  </button>
                  <div className={style.count}>{count[current]}</div>

                  <button
                     onClick={() => setCount((prev) => prev.map((p, i) => (i === current ? ++p : p)))}
                     className={style.sign}
                  >
                     +
                  </button>
               </div>
               <Button onClick={() => setCurrent((prev) => ready(prev))} className={style.ready}>
                  Готово
               </Button>

               <div className={style.sets}>
                  {exercise.map((el, i) => (
                     <Repeats key={i} repeats={el} active={i === current ? true : false} />
                  ))}
               </div>
            </div>
         )}
      </div>
   );
};
