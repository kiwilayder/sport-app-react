import React from "react";
import style from "./UserAvatar.module.css";
import { Avatar } from "antd";
import cat from "../../../../assets/кит.png";

export const UserAvatar = ({ userName }) => {
   return (
      <div className={style.avatar}>
         <div className={style.name}>{userName}</div>
         <Avatar shape="circle" size={200} src={cat} />
      </div>
   );
};
