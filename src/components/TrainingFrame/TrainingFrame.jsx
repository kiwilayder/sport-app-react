import React from "react";
import style from "./TrainingFrame.module.css";
import { Avatar, Space } from "antd";
import defaultUser from "../../common/no-user-yellow.png";
import cat from "../../common/кит.png";
import { DrawerUser } from "../DrawerUser/DrawerUser";

export const TrainingFrame = () => {
   return (
      <div className={style.mainFrame}>
         <div className={style.frameTop}>
            <Space size={"middle"}>
               <Avatar shape="circle" size={"large"} src={cat} />
               <DrawerUser />
            </Space>
         </div>
      </div>
   );
};
