import React, { useState } from "react";
import style from "./SportFrameContainer.module.css";
import { SportFrameHeader } from "./components/SportFrameHeader/SportFrameHeader";
import { SportFrameMenu } from "./components/SportFrameMenu/SportFrameMenu";
import { EmptyTrening } from "../Trening/components/EmptyTrening/EmptyTrening";
import { TreningContainer } from "../Trening/TreningContainer";

export const SportFrameContainer = ({ setOpenDrawer }) => {
   const [typeWorkout, setTypeWorkout] = useState(null);

   const changeWorkout = (e) => {
      setTypeWorkout(e.key);
   };

   return (
      <div className={style.mainFrame}>
         <SportFrameHeader setOpenDrawer={setOpenDrawer} />
         <div className={style.traningWindow}>
            <SportFrameMenu changeWorkout={changeWorkout} />
            {typeWorkout ? <TreningContainer type={typeWorkout} /> : <EmptyTrening />}
         </div>
      </div>
   );
};
