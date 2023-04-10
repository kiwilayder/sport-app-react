import React from "react";
import style from "./SetCategory.module.css";
import { Button } from "antd";

export const SetCategory = ({ setCategory }) => {
   return (
      <div className={style.category}>
         <div className={style.card}>
            <h2 className={style.title}>Начинающий</h2>
            <p className={style.subTitle}>15 минут в день</p>
            <Button
               onClick={() => setCategory("easy")}
               className={style.button}
               type="primary"
               htmlType="submit"
            >
               Выбрать
            </Button>
         </div>
         <div className={style.card}>
            <h2 className={style.title}>Бывалый</h2>
            <p className={style.subTitle}>25 минут в день</p>
            <Button
               onClick={() => setCategory("medium")}
               className={style.button}
               type="primary"
               htmlType="submit"
            >
               Выбрать
            </Button>
         </div>
         <div className={style.card}>
            <h2 className={style.title}>Спортсмен</h2>
            <p className={style.subTitle}>40 минут в день</p>
            <Button
               onClick={() => setCategory("hard")}
               className={style.button}
               type="primary"
               htmlType="submit"
            >
               Выбрать
            </Button>
         </div>
      </div>
   );
};
