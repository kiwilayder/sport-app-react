import React, { useState } from "react";
import style from "./UserForm.module.css";
import { Layout } from "antd";
import { UserOptionsFrom } from "../UserOptionsForm/UserOptionsForm";
import { UserCategoryForm } from "../UserCategoryForm/UserCategoryForm";
import { addUser, addCategory } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { Header } from "../Header/Header";

export const UserForm = () => {
   const { Content } = Layout;
   const [showCategory, setShowCategory] = useState(false);
   const dispatch = useDispatch();

   const onFinishForm = (user) => {
      setShowCategory(true);
      user.dateBirth = user.dateBirth.format("DD.MM.YYYY");
      dispatch(addUser({ user }));
   };

   const setCategory = (category) => {
      dispatch(addCategory({ category }));
   };

   return (
      <Layout className={style.layout}>
         <Header isGetButton={false} />

         <Content className={style.content}>
            {!showCategory ? (
               <UserOptionsFrom onFinishForm={onFinishForm} />
            ) : (
               <UserCategoryForm setCategory={setCategory} />
            )}
         </Content>
      </Layout>
   );
};
