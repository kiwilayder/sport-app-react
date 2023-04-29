import React from "react";
import style from "./HomePage.module.css";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import { Header } from "../../ui/Header/Header";

const { Content } = Layout;

export const HomePage = () => {
   return (
      <Layout className={style.layout}>
         <Header getButton={true} />

         <Content className={style.content}>
            <span className={style.slogan}>Будьте последовательны, это путь к успеху</span>
            <NavLink to="/form">
               <button className={style.getStarted}>Приступить</button>
            </NavLink>
         </Content>
      </Layout>
   );
};
