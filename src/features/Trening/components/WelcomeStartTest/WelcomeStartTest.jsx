import { Button } from "antd";
import React, { useState } from "react";
import style from "./WelcomeStartTest.module.css";
import { TestWorkout } from "../TestWorkout/TestWorkout";

export const WelcomeStartTest = ({ setMaxValue }) => {
   const [testWorkout, setTestWorkout] = useState(false);
   if (testWorkout) return <TestWorkout setMaxValue={setMaxValue} />;
   return (
      <div className={style.main}>
         <h1 className={style.welcome}>Добро пожаловать</h1>
         <span className={style.line}>Перед началом тренировки. Выполни тест на выносливость.</span>
         <span className={style.line}>Приложение создаст для тебя персональную программу тренировок.</span>
         <div className={style.border}>
            <h2 className={style.title}>Для максимального результата</h2>
            <ul className={style.list}>
               <li className={style.item}>тренируйтесь 3 раза в неделю</li>
               <li className={style.item}>делайте 1 день отдыха между тренировками</li>
               <li className={style.item}>в конце недели выполните тест на выносливость</li>
            </ul>
         </div>
         <Button className={style.startButton} onClick={() => setTestWorkout(true)}>
            НАЧАТЬ
         </Button>
      </div>
   );
};
