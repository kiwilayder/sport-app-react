import React, { useState } from "react";
import style from "./SportFrameContainer.module.css";
import { SportFrameHeader } from "./components/SportFrameHeader/SportFrameHeader";
import { SportFrameMenu } from "./components/SportFrameMenu/SportFrameMenu";
import { EmptyTraning } from "../../ui/EmptyTraining/EmptyTraining";
import { TraningContainer } from "../Traning/TraningContainer";

export const SportFrameContainer = ({ setOpenDrawer }) => {
   const [typeWorkout, setTypeWorkout] = useState(null);

   const changeWorkout = (e) => {
      setTypeWorkout([e.key, "отжиманий"]);
   };

   return (
      <div className={style.mainFrame}>
         <SportFrameHeader setOpenDrawer={setOpenDrawer} />
         <div className={style.traningWindow}>
            <SportFrameMenu changeWorkout={changeWorkout} />
            {typeWorkout ? (
               <TraningContainer type={typeWorkout[0]} textTraning={typeWorkout[1]} />
            ) : (
               <EmptyTraning />
            )}
         </div>
      </div>
   );
};
