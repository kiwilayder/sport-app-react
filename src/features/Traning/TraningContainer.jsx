import React from "react";
import { StartTest } from "./components/StartTest/StartTest";
import { useDispatch, useSelector } from "react-redux";
import { addMaxValue } from "../../store/userTraningSlice";
import { message } from "antd";
import { StartTrening } from "./components/StartTrening/StartTrening";
import { calkTrening } from "./helpers/calcTrening";

export const TraningContainer = ({ type, textTraning }) => {
   const maxValue = useSelector((state) => state.userTraningData["max" + type]);
   const dispatch = useDispatch();

   const setMaxValue = (value) => {
      dispatch(addMaxValue({ value }));
      message.success("Тренировка создана!", [1.5]);
   };

   if (maxValue) {
      const approach = calkTrening(maxValue);
      return <StartTrening approach={approach} />;
   }

   return <StartTest setMaxValue={setMaxValue} textTraning={textTraning} />;
};
