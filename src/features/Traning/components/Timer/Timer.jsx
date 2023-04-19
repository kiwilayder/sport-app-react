import React, { useEffect, useState } from "react";
import style from "./Timer.module.css";
import { Button, Progress } from "antd";

export const Timer = ({ time = 90, setTimer }) => {
   const [startSeconds, setStartSeconds] = useState(time);
   const circlePersent = startSeconds / (time / 100);

   const getPadTime = (time) => time.toString().padStart(2, "0");
   const minutes = getPadTime(Math.floor(startSeconds / 60));
   const second = getPadTime(Math.floor(startSeconds - minutes * 60));

   const formatCircle = <span>{`${minutes} : ${second}`}</span>;

   useEffect(() => {
      const interval = setInterval(() => {
         setStartSeconds((prevSecond) => (prevSecond >= 1 ? --prevSecond : 0));
      }, 1000);

      return () => clearInterval(interval);
   }, [startSeconds]);

   return (
      <div className={style.timer}>
         <Progress
            type="circle"
            size={300}
            status="normal"
            strokeColor="#fcba28"
            percent={circlePersent}
            format={() => formatCircle}
         />
         <div className={style.buttonGroup}>
            <Button onClick={() => setStartSeconds((prevSecond) => prevSecond + 30)} className={style.ready}>
               + 30 сек.
            </Button>
            <Button className={style.ready} onClick={() => setTimer(false)}>
               Готов
            </Button>
         </div>
      </div>
   );
};
