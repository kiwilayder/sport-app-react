import { Avatar, Space } from "antd";
import React from "react";
import cat from "../../../../assets/кит.png";
import style from "./SportFrameHeader.module.css";
import classNames from "classnames";

export const SportFrameHeader = ({ openMenu, setOpenMenu, userName }) => {
   return (
      <div className={style.header}>
         <button
            onClick={() => setOpenMenu(!openMenu)}
            className={classNames(style.menuBurger, openMenu ? style.open : null)}
            id="burger"
         >
            <span className={style.line} />
            <span className={style.line} />
            <span className={style.line} />
         </button>
         <Space size={"middle"}>
            <Avatar shape="circle" size={55} src={cat} />
            <div className={style.userName}>{userName}</div>
         </Space>
      </div>
   );
};
