import { StockOutlined, ThunderboltFilled, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import style from "./SportFrameMenu.module.css";

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
   getItem("Статистика", "sub", <StockOutlined />, [getItem("Отжимания", STAT)]),
];

export const SportFrameMenu = ({ changeWorkout }) => (
   <div className={style.menu}>
      <Menu
         onClick={(e) => changeWorkout(e.key)}
         style={{
            width: 200,
            flex: "auto",
            borderBottomLeftRadius: 16,
         }}
         mode="vertical"
         items={items}
      />
   </div>
);
