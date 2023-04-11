import React from "react";
import { StartPageTest } from "../../ui/StartPageTest/StartPageTest";
import { useDispatch, useSelector } from "react-redux";
import { addInitial } from "../../store/userTraningSlice";
import style from "./TraningContainer.module.css";
import { Repeats } from "./components/Repeats/Repeats";
import { Button } from "antd";

export const TraningContainer = ({ type, textTraning }) => {
   const initialValue = useSelector((state) => state.userTraningData["initial" + type]);
   const dispatch = useDispatch();

   const setInitialValue = (value) => {
      dispatch(addInitial({ value }));
   };

   const arr = [1, 2, 3, 4, 5].map((item) => <Repeats repeats={item} />);

   if (!initialValue) return <StartPageTest setInitialValue={setInitialValue} textTraning={textTraning} />;
   return (
      <div className={style.trening}>
         <div className={style.dayBlock}>
            <span className={style.day}>День 1</span>
            <div className={style.repeats}>{arr}</div>
         </div>

         <span className={style.rest}>Отдых 1 день</span>

         <div className={style.dayBlock}>
            <span className={style.day}>День 2</span>
            <div className={style.repeats}>{arr}</div>
         </div>

         <span className={style.rest}>Отдых 1 день</span>

         <div className={style.dayBlock}>
            <span className={style.day}>День 3</span>
            <div className={style.repeats}>{arr}</div>
         </div>

         <span className={style.rest}>Отдых 1 день</span>

         <div className={style.finalTest}>
            <Button className={style.buttonTest}>Итоговый тест</Button>
         </div>
      </div>
   );
};
