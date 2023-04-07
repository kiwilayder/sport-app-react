import React from "react";
import style from "./SportFrameContainer.module.css";
import { Avatar, Space } from "antd";
import defaultUser from "../../assets/no-user-yellow.png";
import cat from "../../assets/кит.png";
import { DrawerUserContainer } from "../UserInfoDrawer/DrawerUserContainer";

export const SportFrameContainer = () => {
   return (
      <div className={style.mainFrame}>
         <div className={style.frameTop}>
            <Space size={"middle"}>
               <Avatar shape="circle" size={"large"} src={cat} />
               <DrawerUserContainer />
            </Space>
         </div>
      </div>
   );
};
