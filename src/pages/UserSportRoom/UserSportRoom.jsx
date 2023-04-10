import React, { useState } from "react";
import { Header } from "../../ui/Header/Header";
import { Layout } from "antd";
import style from "./UserSportRoom.module.css";
import { SportFrameContainer } from "../../features/SportFrame/SportFrameContainer";
import { DrawerUserContainer } from "../../features/UserInfoDrawer/DrawerUserContainer";

export const UserSportRoom = () => {
   const [openDrawer, setOpenDrawer] = useState(false);
   const { Content } = Layout;
   return (
      <Layout className={style.layout}>
         <Header statusAuthButton={true} isGetButton={false} />

         <Content className={style.content}>
            <SportFrameContainer setOpenDrawer={setOpenDrawer} />
            <DrawerUserContainer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
         </Content>
      </Layout>
   );
};
