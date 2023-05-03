import React, { useReducer } from "react";
import style from "./StartTrening.module.css";
import { Button } from "antd";
import { Repeats } from "../Repeats/Repeats";
import { Exercise } from "../Exercise/Exercise";
import { TestWorkout } from "../TestWorkout/TestWorkout";

const initialArg = {
   exercise: [],
   timeOfExerise: null,
   startTrening: false,
   startTest: false,
};

const treningReducer = (state, action) => {
   switch (action.type) {
      case "currentExecise":
         return {
            ...state,
            exercise: [...action.exercise],
         };
      case "setTimeExecise":
         return {
            ...state,
            timeOfExerise: action.time,
         };
      case "toggleTrening":
         return {
            ...state,
            startTrening: !state.startTrening,
         };
      case "toggleTest":
         return {
            ...state,
            startTest: !state.startTest,
         };
   }
};

export const StartTrening = ({ rest, setMaxValue, approach, setDayProgress, dayProgress }) => {
   const [state, dispatch] = useReducer(treningReducer, initialArg);

   const dayActive = (dayIndex, el) => {
      if (dayProgress !== dayIndex) return null;
      dispatch({ type: "currentExecise", exercise: el });
      dispatch({ type: "setTimeExecise", time: rest[dayIndex] });
      dispatch({ type: "toggleTrening" });
   };

   if (state.startTest) return <TestWorkout dispatch={dispatch} setMaxValue={setMaxValue} />;

   if (state.startTrening)
      return (
         <Exercise
            rest={state.timeOfExerise}
            dispatch={dispatch}
            setDayProgress={setDayProgress}
            exercise={state.exercise}
         />
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
                     <div className={style.frameRepeats}>
                        <span className={style.textRepeats}>Количество повторений</span>
                        <div className={style.repeats}>
                           {el.map((el, i) => (
                              <Repeats key={i} repeats={el} />
                           ))}
                        </div>
                     </div>
                  </div>
                  <span className={style.rest}>Отдых 1 день</span>
               </React.Fragment>
            );
         })}

         <div className={style.finalTest}>
            <span className={style.textTest}>Выполните максимальное количество повторений</span>
            <Button
               disabled={dayProgress !== approach.length}
               onClick={() => dispatch({ type: "toggleTest" })}
               className={style.buttonTest}
            >
               Итоговый тест
            </Button>
         </div>
      </div>
   );
};
