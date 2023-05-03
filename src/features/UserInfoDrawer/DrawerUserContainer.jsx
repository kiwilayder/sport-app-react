import { Drawer, Space } from "antd";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { CircleInfo } from "./components/CircleInfo/CircleInfo";
import { UserParam } from "./components/UserParam/UserParam";
import { BodyMass } from "./components/BodyMass/BodyMass";
import { updateHeight, updateWeight } from "../../store/userSlice";
import { excessWeight, indexMassBody } from "./helpers/indexMassBody";

export const DrawerUserContainer = ({ user, openDrawer, setOpenDrawer }) => {
   const dispatch = useDispatch();

   const [textIndex, bodyIndex, typeAlert] = useMemo(
      () => indexMassBody(user.userHeight, user.userWeight),
      [user.userHeight, user.userWeight]
   );

   const surplus = excessWeight(user.userHeight, user.userWeight, bodyIndex);

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
            <CircleInfo userName={user.userName} />
            <UserParam
               userWeight={user.userWeight}
               userHeight={user.userHeight}
               onChangeHeight={onChangeHeight}
               onChangeWeight={onChangeWeight}
               bodyIndex={bodyIndex}
            />
            <BodyMass textIndex={textIndex} surplus={surplus} typeAlert={typeAlert} />
         </Space>
      </Drawer>
   );
};
