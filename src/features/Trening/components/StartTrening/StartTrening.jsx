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
      case "startExecise":
         return {
            ...state,
            exercise: action.exercise,
            timeOfExerise: action.timeOfExerise,
            startTrening: !state.startTrening,
         };

      case "stopExecise":
         return {
            ...state,
            startTrening: !state.startTrening,
         };
      case "toggleTest":
         return {
            ...state,
            startTest: !state.startTest,
         };
      default:
         return state;
   }
};

export const StartTrening = ({ rest, setMaxValue, approach, setDayProgress, dayProgress }) => {
   const [state, dispatch] = useReducer(treningReducer, initialArg);

   const dayActive = (dayIndex, approachElement) => {
      if (dayProgress !== dayIndex) return null;
      dispatch({ type: "startExecise", exercise: approachElement, timeOfExerise: rest[dayIndex] });
   };

   const toggleTest = () => {
      dispatch({ type: "toggleTest" });
   };

   const toggleExecise = () => {
      dispatch({ type: "stopExecise" });
   };

   switch (true) {
      case state.startTest:
         return <TestWorkout toggleTest={toggleTest} setMaxValue={setMaxValue} />;

      case state.startTrening:
         return (
            <Exercise
               rest={state.timeOfExerise}
               toggleExecise={toggleExecise}
               setDayProgress={setDayProgress}
               exercise={state.exercise}
            />
         );

      default:
         return (
            <div className={style.trening}>
               {approach.map((approachElement, dayIndex) => {
                  return (
                     <React.Fragment key={dayIndex}>
                        <div className={style.dayBlock}>
                           <span
                              onClick={() => dayActive(dayIndex, approachElement)}
                              className={dayProgress !== dayIndex ? style.day : style.dayActive}
                           >
                              День {dayIndex + 1}
                           </span>
                           <div className={style.frameRepeats}>
                              <span className={style.textRepeats}>Количество повторений</span>
                              <div className={style.repeats}>
                                 {approachElement.map((el, i) => (
                                    <Repeats dayDesign={true} key={i} repeats={el} />
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
   }
};
