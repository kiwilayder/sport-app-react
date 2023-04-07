import React from "react";
import style from "./Header.module.css";
import { Button, Layout, Space } from "antd";
import { NavLink } from "react-router-dom";

export const Header = ({ isGetButton = true, statusAuthButton }) => {
   const { Header } = Layout;
   return (
      <Header className={style.header}>
         <p className={style.logo}>WORK-UP</p>
         <Space size="large">
            {isGetButton ? (
               <NavLink to="/form">
                  <Button className={style.button} type="primary">
                     Попробовать
                  </Button>
               </NavLink>
            ) : null}
            {statusAuthButton ? (
               <Button className={style.button}>Выйти</Button>
            ) : (
               <Button className={style.button}>Войти</Button>
            )}
         </Space>
      </Header>
   );
};
