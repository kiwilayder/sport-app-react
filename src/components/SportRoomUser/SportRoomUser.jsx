import React from "react";
import { Header } from "../Header/Header";
import { Layout } from "antd";
import style from "./SportRoomUser.module.css";
import { TrainingFrame } from "../TrainingFrame/TrainingFrame";

export const SportRoomUser = () => {
   const { Content } = Layout;
   return (
      <Layout className={style.layout}>
         <Header statusAuthButton={true} isGetButton={false} />

         <Content className={style.content}>
            <TrainingFrame />
         </Content>
      </Layout>
   );
};
