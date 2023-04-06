import { Progress, Space } from "antd";
import React from "react";
import style from "./BioParamUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { DetailedParam } from "../DetailedParam/DetailedParam";
import { updateHeight, updateWeight } from "../../store/userSlice";

export const BioParamUser = () => {
   const userName = useSelector((state) => state.userData.user.userName);
   const userHeight = useSelector((state) => state.userData.user.sliderHeight);
   const userWeight = useSelector((state) => state.userData.user.sliderWeight);

   const dispatch = useDispatch();

   const onChangeHeight = (valueHeight) => {
      dispatch(updateHeight({ valueHeight }));
   };
   const onChangeWeight = (valueWeight) => {
      dispatch(updateWeight({ valueWeight }));
   };

   return (
      <div className={style.wrapperInfo}>
         <Space size={"small"} direction={"vertical"} align={"center"}>
            <div className={style.userName}>{userName}</div>
            <Progress
               size={200}
               type="circle"
               percent={95}
               strokeColor={{
                  "0%": "#fcba28",
                  "100%": "#9e5b03",
               }}
            />
            <div className={style.fireCalories}>Количество сожженных ккал сегодня</div>
         </Space>
         <DetailedParam
            userWeight={userWeight}
            userHeight={userHeight}
            onChangeHeight={onChangeHeight}
            onChangeWeight={onChangeWeight}
         />
      </div>
   );
};
