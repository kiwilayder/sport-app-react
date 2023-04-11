import { SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import style from "./SportFrameMenu.module.css";

const getItem = (label, key, icon, children, type) => {
   return {
      key,
      icon,
      children,
      label,
      type,
   };
};

const items = [getItem("Отжимания", "PushUps", <SettingOutlined />)];

export const SportFrameMenu = ({ changeWorkout }) => (
   <div className={style.menu}>
      <Menu
         onClick={changeWorkout}
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
