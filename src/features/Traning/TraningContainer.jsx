import React from "react";
import { WelcomeStartTest } from "./components/WelcomeStartTest/WelcomeStartTest";
import { useDispatch, useSelector } from "react-redux";
import { updateDayProgress, updateMaxValue } from "../../store/userTraningSlice";
import { message } from "antd";
import { StartTrening } from "./components/StartTrening/StartTrening";
import { calkTrening } from "./helpers/calcTrening";

export const TraningContainer = ({ type }) => {
   const dataTrening = useSelector((state) => state.userTraningData[type]);

   const dispatch = useDispatch();

   const setMaxValue = (value) => {
      dispatch(updateMaxValue({ value, type }));
      message.success("Тренировка создана!", [1.5]);
   };

   const setDayProgress = (day) => {
      dispatch(updateDayProgress({ day, type }));
   };

   if (dataTrening) {
      const approach = calkTrening(dataTrening.maxValue);
      return (
         <StartTrening
            setMaxValue={setMaxValue}
            setDayProgress={setDayProgress}
            dayProgress={dataTrening.dayProgress}
            approach={approach}
         />
      );
   }

   return <WelcomeStartTest setMaxValue={setMaxValue} />;
};
