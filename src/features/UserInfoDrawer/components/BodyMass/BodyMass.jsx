import React from "react";
import style from "./BodyMass.module.css";
import { Alert } from "antd";

export const BodyMass = React.memo(({ textIndex, surplus, typeAlert }) => {
   return (
      <Alert
         className={style.alert}
         message={textIndex}
         description={`Количество лишнего веса: ${surplus} кг.`}
         type={typeAlert}
         showIcon
      />
   );
});
