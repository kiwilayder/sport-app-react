import { Drawer, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircleInfo } from "./components/CircleInfo/CircleInfo";
import { UserParam } from "./components/UserParam/UserParam";
import { BodyMass } from "./components/BodyMass/BodyMass";
import { updateHeight, updateWeight } from "../../store/userSlice";
import { excessWeight, indexMassBody } from "./helpers/indexMassBody";

export const DrawerUserContainer = ({ openDrawer, setOpenDrawer }) => {
   const userName = useSelector((state) => state.userData.userName);
   const userHeight = useSelector((state) => state.userData.userHeight);
   const userWeight = useSelector((state) => state.userData.userWeight);

   const [textIndex, valueIndex, typeAlert] = indexMassBody(userHeight, userWeight);
   const surplus = excessWeight(userHeight, userWeight, valueIndex);

   const dispatch = useDispatch();
   const onChangeHeight = (valueHeight) => {
      dispatch(updateHeight({ valueHeight }));
   };
   const onChangeWeight = (valueWeight) => {
      dispatch(updateWeight({ valueWeight }));
   };

   return (
      <Drawer
         title="Мои параметры"
         placement={"right"}
         width={500}
         onClose={() => setOpenDrawer(false)}
         open={openDrawer}
         extra={<></>}
      >
         <Space
            style={{
               width: "100%",
            }}
            direction={"vertical"}
            size={"middle"}
         >
            <CircleInfo userName={userName} />
            <UserParam
               userWeight={userWeight}
               userHeight={userHeight}
               onChangeHeight={onChangeHeight}
               onChangeWeight={onChangeWeight}
               valueIndex={valueIndex}
            />
            <BodyMass textIndex={textIndex} surplus={surplus} typeAlert={typeAlert} />
         </Space>
      </Drawer>
   );
};
