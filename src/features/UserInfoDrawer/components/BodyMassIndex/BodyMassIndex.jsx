import React from "react";
import { indexMassBody } from "../../helpers/indexMassBody";
import style from "./BodyMassIndex.module.css";

export const BodyMassIndex = React.memo(({ bodyHeight, bodyWeight }) => {
   const [textIndex, valueIndex] = indexMassBody(bodyHeight, bodyWeight);

   return (
      <div>
         <span className={style.index}>Индекс тела: {valueIndex}</span>
         <div className={style.index}>{textIndex}</div>
         <div className={style.otherInfo}>
            <p>Количество лишних ккл</p>
            <p>Ежедневный профицит</p>
         </div>
      </div>
   );
});
