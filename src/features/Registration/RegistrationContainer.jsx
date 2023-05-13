import React, { useState } from "react";
import { setCategory, setUser } from "../../actions/localUser";
import { useDispatch } from "react-redux";
import { SetCategory } from "./components/SetCategoryForm/SetCategory";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { useNavigate } from "react-router-dom";
import { withAuthRederect } from "../../hoc/withAuthRederect";

export const RegistrationContainer = withAuthRederect(() => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [showCategory, setShowCategory] = useState();

   const changeCategory = (category) => {
      dispatch(setCategory(category));
      navigate("/sportroom");
   };

   const onFinishForm = (user) => {
      const userFormatDateBirth = { ...user, dateBirth: user.dateBirth.format("DD.MM.YYYY") };
      dispatch(setUser(userFormatDateBirth));
      setShowCategory(!showCategory);
   };

   return (
      <>
         {showCategory ? (
            <SetCategory changeCategory={changeCategory} />
         ) : (
            <RegistrationForm onFinishForm={onFinishForm} />
         )}
      </>
   );
});
