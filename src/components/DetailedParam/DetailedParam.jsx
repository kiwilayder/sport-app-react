import React, { useState } from "react";
import style from "./DetailedParam.module.css";
import { InputNumber } from "antd";
import { BodyMassIndex } from "../BodyMassIndex/BodyMassIndex";

export const DetailedParam = ({ userHeight, userWeight, onChangeWeight, onChangeHeight }) => {
   const [showHeight, setShowHeight] = useState(false);
   const [showWeight, setShowWeight] = useState(false);

   return (
      <>
         <div className={style.blockParam}>
            <div className={style.item}>
               <span className={style.subTitle}>Рост: {userHeight}</span>
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
               <span className={style.subTitle}>Вес: {userWeight}</span>
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
         </div>
         <BodyMassIndex bodyHeight={userHeight} bodyWeight={userWeight} />
      </>
   );
};
