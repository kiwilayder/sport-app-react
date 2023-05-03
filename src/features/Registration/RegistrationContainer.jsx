import React, { useEffect } from "react";
import { getUser, setCategory, setUser } from "../../actions/localUser";
import { useDispatch, useSelector } from "react-redux";
import { SetCategory } from "./components/SetCategoryForm/SetCategory";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { useNavigate } from "react-router-dom";

export const RegistrationContainer = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      dispatch(getUser());
   }, []);

   const user = useSelector((state) => state.userData);

   const changeCategory = (category) => {
      dispatch(setCategory(category));
   };

   const onFinishForm = (user) => {
      const userFormatDateBirth = { ...user, dateBirth: user.dateBirth.format("DD.MM.YYYY") };
      dispatch(setUser(userFormatDateBirth));
   };

   if (user.category) return navigate("/sportroom");

   return (
      <>
         {!user.userName ? (
            <RegistrationForm onFinishForm={onFinishForm} />
         ) : (
            <SetCategory changeCategory={changeCategory} />
         )}
      </>
   );
};
