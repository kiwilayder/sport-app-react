import React, { useEffect } from "react";
import { Line } from "@ant-design/plots";
import style from "./StatisticsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDataTrening } from "../../actions/localUserTrening";

export const StatLine = ({ type }) => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getDataTrening("pushUps"));
   }, [type]);

   const data = useSelector((state) => state.userTreningData.pushUps.statProgress);

   const config = {
      data,
      xField: "date",
      yField: "sumRepeat",
      meta: {
         sumRepeat: {
            alias: "Повторений",
         },
      },
      label: {
         style: {
            fontSize: 18,
            fill: "white",
         },
      },
      point: {
         size: 5,
         shape: "circle",
         style: {
            fill: "white",
            stroke: "#fcba28",
            lineWidth: 2,
         },
      },
      tooltip: {
         showMarkers: false,
      },
      lineStyle: {
         stroke: "#fcba28",
      },
      state: {
         active: {
            style: {
               shadowBlur: 0,
               stroke: "#000",
               fill: "red",
            },
         },
      },
      interactions: [
         {
            type: "marker-active",
         },
      ],
   };

   return (
      <div className={style.frameStat}>
         <Line {...config} />
      </div>
   );
};
