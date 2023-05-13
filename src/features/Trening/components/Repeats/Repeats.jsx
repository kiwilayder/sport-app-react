import React from "react";
import style from "./Repeats.module.css";

export const Repeats = ({ dayDesign, repeats, active }) => (
   <div className={dayDesign ? style.dayDesign : active ? style.circleActive : style.circle}>{repeats}</div>
);
