import React, { useState } from "react";
import style from "./TestWorkout.module.css";
import { Button, InputNumber } from "antd";

export const TestWorkout = ({ toggleTest, setMaxValue }) => {
   const [count, setCount] = useState(0);
   const [showInput, setShowInput] = useState(false);

   const finish = (count) => {
      setMaxValue(count);
      if (toggleTest) toggleTest();
   };

   return (
      <div className={style.mainFrame}>
         <div className={style.mainText}>
            <h1 className={style.title}>Тест на выносливость</h1>
            <span className={style.subTitle}>Выполните максимальное количество повторений</span>
         </div>
         <div className={style.changeCount}>
            <button onClick={() => setCount((prev) => (prev === 0 ? prev : --prev))} className={style.sign}>
               -
            </button>

            {showInput ? (
               <InputNumber
                  className={style.input}
                  onPressEnter={() => setShowInput(false)}
                  autoFocus={true}
                  onBlur={() => setShowInput(false)}
                  min={0}
                  max={200}
                  size={"large"}
                  onChange={(e) => setCount(e)}
               />
            ) : (
               <div onClick={() => setShowInput(true)} className={style.count}>
                  {count}
               </div>
            )}

            <button onClick={() => setCount((prev) => ++prev)} className={style.sign}>
               +
            </button>
         </div>
         <Button onClick={() => finish(count)} className={style.button}>
            Готово
         </Button>
      </div>
   );
};
