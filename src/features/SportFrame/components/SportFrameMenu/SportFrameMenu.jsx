import { StockOutlined, ThunderboltFilled, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import style from "./SportFrameMenu.module.css";
import { useState } from "react";
import classNames from "classnames";

export const PUSH_UPS = "pushUps";
export const PARAMETERS = "parameters";
export const STAT = "stat";

const getItem = (label, key, icon, children, type) => {
   return {
      key,
      icon,
      children,
      label,
      type,
   };
};

const items = [
   getItem("Отжимания", PUSH_UPS, <ThunderboltFilled />),
   getItem("Мои параметры", PARAMETERS, <UserOutlined />),
   getItem("Статистика", null, <StockOutlined />, [getItem("Отжимания", STAT)]),
];

export const SportFrameMenu = ({ openMenu, changeWorkout }) => {
   const [openKeys, setOpenKeys] = useState([]);

   const onOpenChange = (keys) => {
      setOpenKeys(keys);
   };

   return (
      <div className={classNames(style.menuFrame, openMenu ? style.isOpenMenu : null)}>
         <Menu
            className={style.menu}
            onClick={(e) => changeWorkout(e.key)}
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
               width: 200,
            }}
            items={items}
         />
      </div>
   );
};
