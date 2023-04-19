import React from "react";
import style from "./Repeats.module.css";

export const Repeats = ({ repeats, active }) => (
   <div className={active ? style.circleActive : style.circle}>{repeats}</div>
);
