import React, { useState } from "react";
import style from "./SportFrameContainer.module.css";
import { SportFrameHeader } from "./components/SportFrameHeader/SportFrameHeader";
import { SportFrameMenu } from "./components/SportFrameMenu/SportFrameMenu";
import { EmptyTrening } from "../Trening/components/EmptyTrening/EmptyTrening";
import { TreningContainer } from "../Trening/TreningContainer";
import { useSelector } from "react-redux";
import { DemoLine } from "../Statistics/StatisticsContainer";

export const SportFrameContainer = ({ setOpenDrawer }) => {
   const userName = useSelector((state) => state.userData.userName);
   const [component, setComponent] = useState(<EmptyTrening />);

   const changeWorkout = (key) => {
      switch (key) {
         case "pushUps":
            setComponent(<TreningContainer type={key} />);
            break;

         case "stat":
            setComponent(<DemoLine />);
            break;

         case "parameters":
            setOpenDrawer(true);
            break;

         default:
            setComponent(<EmptyTrening />);
      }
   };

   return (
      <div className={style.mainFrame}>
         <SportFrameHeader userName={userName} />
         <div className={style.traningWindow}>
            <SportFrameMenu changeWorkout={changeWorkout} />
            {component}
         </div>
      </div>
   );
};
