import { Drawer, Space } from "antd";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { UserParam } from "./components/UserParam/UserParam";
import { BodyMass } from "./components/BodyMass/BodyMass";
import { excessWeight, indexMassBody } from "./helpers/indexMassBody";
import { UserAvatar } from "./components/UserAvatar/UserAvatar";
import { updateUserHeight, updateUserWeight } from "../../actions/localUser";
import style from "./DrawerUserContainer.module.css";

export const DrawerUserContainer = ({ user, openDrawer, setOpenDrawer }) => {
   const dispatch = useDispatch();

   const [textIndex, bodyIndex, typeAlert] = indexMassBody(user.userHeight, user.userWeight);

   const surplus = excessWeight(user.userHeight, user.userWeight, bodyIndex);

   const onChangeHeight = (valueHeight) => {
      dispatch(updateUserHeight(valueHeight));
   };
   const onChangeWeight = (valueWeight) => {
      dispatch(updateUserWeight(valueWeight));
   };

   return (
      <Drawer
         rootClassName={style.drawer}
         className={style.drawer}
         title="Мои параметры"
         placement={"right"}
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
            <UserAvatar userName={user.userName} />
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
