import React, { useState } from "react";
import style from "./SportFrameContainer.module.css";
import { SportFrameHeader } from "./components/SportFrameHeader/SportFrameHeader";
import { PARAMETERS, PUSH_UPS, STAT, SportFrameMenu } from "./components/SportFrameMenu/SportFrameMenu";
import { EmptyTrening } from "../Trening/components/EmptyTrening/EmptyTrening";
import { TreningContainer } from "../Trening/TreningContainer";
import { StatLine } from "../Statistics/StatisticsContainer";
import { useSelector } from "react-redux";

export const SportFrameContainer = ({ setOpenDrawer }) => {
   const user = useSelector((state) => state.userData);

   const [openMenu, setOpenMenu] = useState(false);
   const [component, setComponent] = useState(<EmptyTrening />);

   const changeWorkout = (key) => {
      setOpenMenu(!openMenu);
      switch (key) {
         case PUSH_UPS:
            setComponent(<TreningContainer type={key} />);
            break;

         case STAT:
            setComponent(<StatLine type={key} />);
            break;

         case PARAMETERS:
            setOpenDrawer(true);
            break;

         default:
            setComponent(<EmptyTrening />);
      }
   };

   return (
      <div className={style.mainFrame}>
         <SportFrameHeader userName={user.userName} openMenu={openMenu} setOpenMenu={setOpenMenu} />
         <div className={style.traningWindow}>
            <SportFrameMenu changeWorkout={changeWorkout} openMenu={openMenu} />
            {component}
         </div>
      </div>
   );
};
