import React from "react";
import { Header } from "../../ui/Header/Header";
import { Layout } from "antd";
import style from "./UserSportRoom.module.css";
import { SportFrameContainer } from "../../features/SportFrame/SportFrameContainer";

export const UserSportRoom = () => {
   const { Content } = Layout;
   return (
      <Layout className={style.layout}>
         <Header statusAuthButton={true} isGetButton={false} />

         <Content className={style.content}>
            <SportFrameContainer />
         </Content>
      </Layout>
   );
};
