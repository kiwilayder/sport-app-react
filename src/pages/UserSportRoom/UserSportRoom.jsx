import React, { useEffect, useState } from "react";
import { Header } from "../../ui/Header/Header";
import { Layout } from "antd";
import style from "./UserSportRoom.module.css";
import { SportFrameContainer } from "../../features/SportFrame/SportFrameContainer";
import { DrawerUserContainer } from "../../features/UserInfoDrawer/DrawerUserContainer";
import { getUser } from "../../actions/localUser";
import { useDispatch, useSelector } from "react-redux";

const { Content } = Layout;

export const UserSportRoom = () => {
   const [openDrawer, setOpenDrawer] = useState(false);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUser());
   }, []);

   const user = useSelector((state) => state.userData);

   if (!user.userName) return null;

   return (
      <Layout className={style.layout}>
         <Header />

         <Content className={style.content}>
            <SportFrameContainer setOpenDrawer={setOpenDrawer} />
            <DrawerUserContainer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} user={user} />
         </Content>
      </Layout>
   );
};
