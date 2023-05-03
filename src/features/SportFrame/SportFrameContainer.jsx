import React, { useEffect, useState } from "react";
import style from "./SportFrameContainer.module.css";
import { SportFrameHeader } from "./components/SportFrameHeader/SportFrameHeader";
import { PARAMETERS, PUSH_UPS, STAT, SportFrameMenu } from "./components/SportFrameMenu/SportFrameMenu";
import { EmptyTrening } from "../Trening/components/EmptyTrening/EmptyTrening";
import { TreningContainer } from "../Trening/TreningContainer";
import { getUser } from "../../actions/localUser";
import { DemoLine } from "../Statistics/StatisticsContainer";
import { useDispatch, useSelector } from "react-redux";

export const SportFrameContainer = ({ setOpenDrawer }) => {
   const user = useSelector((state) => state.userData);

   const [component, setComponent] = useState(<EmptyTrening />);

   const changeWorkout = (key) => {
      switch (key) {
         case PUSH_UPS:
            setComponent(<TreningContainer type={key} />);
            break;

         case STAT:
            setComponent(<DemoLine />);
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
         <SportFrameHeader userName={user.userName} />
         <div className={style.traningWindow}>
            <SportFrameMenu changeWorkout={changeWorkout} />
            {component}
         </div>
      </div>
   );
};
