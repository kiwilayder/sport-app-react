import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../components/HomePage/HomePage";
import { UserForm } from "../components/UserForm/UserForm";
import { SportRoomUser } from "../components/SportRoomUser/SportRoomUser";

export const App = () => {
   return (
      <div className="app">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<UserForm />} />
            <Route path="/sportroom" element={<SportRoomUser />} />
         </Routes>
      </div>
   );
};
