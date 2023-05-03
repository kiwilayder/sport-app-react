import React, { useState } from "react";
import style from "./UserParam.module.css";
import { InputNumber } from "antd";

export const UserParam = ({ userHeight, userWeight, onChangeWeight, onChangeHeight, bodyIndex }) => {
   const [showHeight, setShowHeight] = useState(false);
   const [showWeight, setShowWeight] = useState(false);

   return (
      <div className={style.blockParam}>
         <div className={style.item}>
            Рост: {userHeight}
            {showHeight ? (
               <InputNumber
                  autoFocus={true}
                  onBlur={() => setShowHeight(false)}
                  min={100}
                  max={220}
                  defaultValue={userHeight}
                  onChange={(e) => onChangeHeight(e)}
               />
            ) : (
               <span className={style.showInput} onClick={() => setShowHeight(true)}>
                  Изменить
               </span>
            )}
         </div>
         <div className={style.item}>
            Вес: {userWeight}
            {showWeight ? (
               <InputNumber
                  autoFocus={true}
                  onBlur={() => setShowWeight(false)}
                  min={40}
                  max={220}
                  defaultValue={userWeight}
                  onChange={(e) => onChangeWeight(e)}
               />
            ) : (
               <span className={style.showInput} onClick={() => setShowWeight(true)}>
                  Изменить
               </span>
            )}
         </div>

         <div className={style.item}>Индекс тела: {bodyIndex}</div>
      </div>
   );
};
