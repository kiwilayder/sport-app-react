import React, { useState } from "react";
import style from "./UserCategoryForm.module.css";
import { Button } from "antd";
import { Navigate } from "react-router-dom";

export const UserCategoryForm = ({ setCategory }) => {
   const [onFinishCategory, setOnFinishCategory] = useState(false);

   const onChangeCategory = (category) => {
      setCategory(category);
      setOnFinishCategory(true);
   };

   if (onFinishCategory) return <Navigate to={"/sportroom"} />;

   return (
      <div className={style.category}>
         <div className={style.card}>
            <h2 className={style.title}>Начинающий</h2>
            <p className={style.subTitle}>15 минут в день</p>
            <Button
               onClick={() => onChangeCategory("easy")}
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
               onClick={() => onChangeCategory("medium")}
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
               onClick={() => onChangeCategory("hard")}
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
