import React, { useEffect, useState } from "react";
import { setLocalUser } from "../../actions/localUser";
import { useDispatch } from "react-redux";
import { SetCategory } from "./components/SetCategoryForm/SetCategory";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { useNavigate } from "react-router-dom";

export const RegistrationContainer = () => {
   const [user, setUser] = useState();

   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      if (user?.category) {
         dispatch(setLocalUser(user));
         navigate("/sportroom");
      }
   }, [user]);

   const changeCategory = (category) => {
      setUser((prevUser) => ({ ...prevUser, category }));
   };

   const onFinishForm = (user) => {
      user.dateBirth = user.dateBirth.format("DD.MM.YYYY");
      setUser(user);
   };

   return (
      <>
         {!user ? (
            <RegistrationForm onFinishForm={onFinishForm} />
         ) : (
            <SetCategory changeCategory={changeCategory} />
         )}
      </>
   );
};
