import React, { useState } from "react";
import style from "./TestWorkout.module.css";
import { Button, Space } from "antd";

export const TestWorkout = ({ textTraning, setMaxValue }) => {
   const [count, setCount] = useState(0);
   return (
      <div className={style.mainFrame}>
         <div className={style.mainText}>
            <h1 className={style.title}>Тест на выносливость</h1>
            <span className={style.subTitle}>Выполните максимальное количество {textTraning}</span>
         </div>

         <Space size={70}>
            <button onClick={() => setCount((prev) => (prev === 0 ? prev : --prev))} className={style.sign}>
               -
            </button>
            <div className={style.count}>{count}</div>
            <button onClick={() => setCount((prev) => ++prev)} className={style.sign}>
               +
            </button>
         </Space>
         <Button onClick={() => setMaxValue(count)} className={style.button}>
            Готово
         </Button>
      </div>
   );
};
