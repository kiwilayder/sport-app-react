import React from "react";
import { WelcomeStartTest } from "./components/WelcomeStartTest/WelcomeStartTest";
import { useDispatch, useSelector } from "react-redux";
import { updateDayProgress, clearDayProgress, updateMaxValue } from "../../store/userTraningSlice";
import { message } from "antd";
import { StartTrening } from "./components/StartTrening/StartTrening";
import { calkApproach, calkRest } from "./helpers/calcTrening";

export const TreningContainer = ({ type }) => {
   const dataTrening = useSelector((state) => state.userTraningData[type]);

   const dispatch = useDispatch();

   const setMaxValue = (value) => {
      dispatch(updateMaxValue({ value, type }));
      dispatch(clearDayProgress({ type }));
      message.success("Тренировка создана!", [1.5]);
   };

   const setDayProgress = (SumRepeat, day) => {
      dispatch(updateDayProgress({ day, type }));
      message.success(`Вы выполнили ${SumRepeat} повторений!`, [5]);
   };

   if (dataTrening.maxValue) {
      const approach = calkApproach(dataTrening.maxValue);
      const rest = calkRest(dataTrening.maxValue);

      return (
         <StartTrening
            rest={rest}
            setMaxValue={setMaxValue}
            setDayProgress={setDayProgress}
            dayProgress={dataTrening.dayProgress}
            approach={approach}
         />
      );
   }

   return <WelcomeStartTest setMaxValue={setMaxValue} />;
};
