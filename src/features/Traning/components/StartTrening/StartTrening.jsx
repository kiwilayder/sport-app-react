import React, { useState } from "react";
import style from "./StartTrening.module.css";
import { Button } from "antd";
import { Repeats } from "../Repeats/Repeats";
import { Exercise } from "../Exercise/Exercise";
import { TestWorkout } from "../TestWorkout/TestWorkout";

export const StartTrening = ({ setMaxValue, approach, setDayProgress, dayProgress }) => {
   const [exercise, setExercise] = useState(null);
   const [stastTrening, setStartTrening] = useState(false);
   const [test, setTest] = useState(false);

   const dayActive = (index, el) => {
      if (dayProgress !== index) return null;
      setExercise(el);
      setStartTrening(true);
   };

   if (test) return <TestWorkout setTest={setTest} setMaxValue={setMaxValue} />;

   if (stastTrening)
      return (
         <Exercise setStartTrening={setStartTrening} setDayProgress={setDayProgress} exercise={exercise} />
      );

   return (
      <div className={style.trening}>
         {approach.map((el, i) => {
            return (
               <React.Fragment key={i}>
                  <div className={style.dayBlock}>
                     <span
                        onClick={() => dayActive(i, el)}
                        className={dayProgress !== i ? style.day : style.dayActive}
                     >
                        День {i + 1}
                     </span>
                     <div className={style.repeats}>
                        {el.map((el, i) => (
                           <Repeats key={i} repeats={el} />
                        ))}
                     </div>
                  </div>
                  <span className={style.rest}>Отдых 1 день</span>
               </React.Fragment>
            );
         })}

         <div className={style.finalTest}>
            <span>Выполните максимальное количество повторений</span>
            <Button
               disabled={dayProgress !== approach.length}
               onClick={() => setTest(true)}
               className={style.buttonTest}
            >
               Итоговый тест
            </Button>
         </div>
      </div>
   );
};
