import React, { useState } from "react";
import { addUser, addCategory } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { SetCategory } from "./components/SetCategoryForm/SetCategory";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { useNavigate } from "react-router-dom";

export const RegistrationContainer = () => {
   const [showCategory, setShowCategory] = useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onFinishForm = (user) => {
      user.dateBirth = user.dateBirth.format("DD.MM.YYYY");
      dispatch(addUser(user));
      setShowCategory(true);
   };

   const setCategory = (category) => {
      dispatch(addCategory({ category }));
      navigate("/sportroom");
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
