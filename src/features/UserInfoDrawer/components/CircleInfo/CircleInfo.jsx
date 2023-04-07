import { Progress, Space } from "antd";
import React from "react";
import style from "./CircleInfo.module.css";

export const CircleInfo = ({ userName }) => {
   return (
      <div className={style.wrapperInfo}>
         <Space size={"small"} direction={"vertical"} align={"center"}>
            <div className={style.userName}>{userName}</div>
            <Progress
               size={200}
               type="circle"
               percent={95}
               strokeColor={{
                  "0%": "#fcba28",
                  "100%": "#9e5b03",
               }}
            />
            <div className={style.fireCalories}>Количество сожженных ккал сегодня</div>
         </Space>
      </div>
   );
};
