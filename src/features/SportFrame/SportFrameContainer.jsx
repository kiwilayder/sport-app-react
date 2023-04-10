import React from "react";
import style from "./SportFrameContainer.module.css";
import { SportFrameHeader } from "./components/SportFrameHeader/SportFrameHeader";
import { SportFrameMenu } from "./components/SportFrameMenu/SportFrameMenu";

export const SportFrameContainer = ({ setOpenDrawer }) => {
   return (
      <div className={style.mainFrame}>
         <div className={style.frameTop}>
            <SportFrameHeader setOpenDrawer={setOpenDrawer} />
         </div>
         <SportFrameMenu />
      </div>
   );
};
