import { Avatar, Button, Space } from "antd";
import React from "react";
import cat from "../../../../assets/кит.png";
import style from "./SportFrameHeader.module.css";

export const SportFrameHeader = ({ userName }) => {
   return (
      <div className={style.header}>
         <Space size={"middle"}>
            <Avatar shape="circle" size={"large"} src={cat} />
            <div className={style.userName}>{userName}</div>
         </Space>
      </div>
   );
};
