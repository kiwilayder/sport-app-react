import React from "react";
import { Line } from "@ant-design/plots";
import style from "./StatisticsContainer.module.css";

export const DemoLine = () => {
   const data = [
      {
         year: "1",
         value: 3,
      },
      {
         year: "2",
         value: 5,
      },
      {
         year: "3",
         value: 9,
      },
      {
         year: "4",
         value: 11,
      },
      {
         year: "5",
         value: 14,
      },
      {
         year: "6",
         value: 15,
      },
   ];

   const config = {
      data,
      xField: "year",
      yField: "value",
      label: {},
      point: {
         size: 5,
         shape: "circle",
         style: {
            fill: "white",
            stroke: "#fcba28",
            lineWidth: 2,
         },
      },
      lineStyle: {
         stroke: "#fcba28",
         lineWidth: 3,
      },

      tooltip: {
         showMarkers: false,
      },
      state: {
         active: {
            style: {
               shadowBlur: 4,
               stroke: "#fcba28",
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
