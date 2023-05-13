import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { UserRegistration } from "../pages/UserRegistration/UserRegistration";
import { UserSportRoom } from "../pages/UserSportRoom/UserSportRoom";

export const App = () => {
   return (
      <div className="app">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<UserRegistration />} />
            <Route path="/sportroom" element={<UserSportRoom />} />
         </Routes>
      </div>
   );
};
