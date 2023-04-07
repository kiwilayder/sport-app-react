import React, { useState } from "react";
import { addUser, addCategory } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { SetCategory } from "./components/SetCategoryForm/SetCategory";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";

export const RegistrationContainer = () => {
   const [showCategory, setShowCategory] = useState(false);
   const dispatch = useDispatch();

   const onFinishForm = (user) => {
      user.dateBirth = user.dateBirth.format("DD.MM.YYYY");
      dispatch(addUser(user));
      setShowCategory(true);
   };

   const setCategory = (category) => {
      dispatch(addCategory({ category }));
   };

   return (
      <>
         {!showCategory ? (
            <RegistrationForm onFinishForm={onFinishForm} />
         ) : (
            <SetCategory setCategory={setCategory} />
         )}
      </>
   );
};
