import React from "react";
import style from "./UserRegistration.module.css";
import { Layout } from "antd";
import { Header } from "../../ui/Header/Header";
import { RegistrationContainer } from "../../features/Registration/RegistrationContainer";

export const UserRegistration = () => {
   const { Content } = Layout;

   return (
      <Layout className={style.layout}>
         <Header />

         <Content className={style.content}>
            <RegistrationContainer />
         </Content>
      </Layout>
   );
};
