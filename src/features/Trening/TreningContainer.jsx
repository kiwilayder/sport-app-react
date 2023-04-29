import React, { useEffect } from "react";
import { WelcomeStartTest } from "./components/WelcomeStartTest/WelcomeStartTest";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { StartTrening } from "./components/StartTrening/StartTrening";
import { calkApproach, calkRest } from "./helpers/calcTrening";
import { getDataTrening, setLocalDayProgress, setLocalMaxValue } from "../../actions/localUserTrening";

export const TreningContainer = ({ type }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getDataTrening(type));
   }, []);

   const dataTrening = useSelector((state) => state.userTreningData[type]);

   const setMaxValue = (maxValue) => {
      dispatch(setLocalMaxValue({ maxValue, type }));
      message.success("Тренировка создана!", [1.5]);
   };

   const setDayProgress = (SumRepeat, day) => {
      dispatch(setLocalDayProgress({ day, type }));
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
