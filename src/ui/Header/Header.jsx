import React from "react";
import style from "./Header.module.css";
import { Button, Layout } from "antd";
import { NavLink } from "react-router-dom";

export const Header = ({ getButton }) => {
   const { Header } = Layout;
   return (
      <Header className={getButton ? style.header : style.noButtonHeader}>
         <p className={style.logo}>WORK-UP</p>

         {getButton && (
            <NavLink to="/form">
               <Button className={style.button}>Попробовать</Button>
            </NavLink>
         )}
      </Header>
   );
};
