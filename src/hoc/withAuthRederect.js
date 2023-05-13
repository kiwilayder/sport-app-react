import React from "react";
import { Navigate } from "react-router-dom";

export const withAuthRederect = (Component) => {
   const auth = JSON.parse(localStorage.getItem("user"));

   const ComponentWithRederect = (props) => {
      if (auth) return <Navigate to={"/sportroom"} />;

      return <Component {...props} />;
   };

   return ComponentWithRederect;
};
