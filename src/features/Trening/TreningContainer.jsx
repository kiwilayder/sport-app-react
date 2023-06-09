import React, { useEffect } from "react";
import { WelcomeStartTest } from "./components/WelcomeStartTest/WelcomeStartTest";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { StartTrening } from "./components/StartTrening/StartTrening";
import { calkApproach, calkRest } from "./helpers/calcTrening";
import { setLocalDayProgress, setLocalMaxValue } from "../../actions/localUserTrening";
import { getDataTrening } from "../../actions/localUserTrening";

export const TreningContainer = ({ type }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getDataTrening(type));
   }, [type]);

   const dataTrening = useSelector((state) => state.userTreningData[type]);

   const setMaxValue = (maxValue) => {
      dispatch(setLocalMaxValue({ maxValue, type }));
      message.success("Тренировка создана!", [1.5]);
   };

   const setDayProgress = (sumRepeat, todayDate) => {
      dispatch(setLocalDayProgress({ type, sumRepeat, todayDate }));
      message.success(`Вы выполнили ${sumRepeat} повторений!`, [5]);
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
