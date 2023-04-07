import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircleInfo } from "./components/CircleInfo/CircleInfo";
import { UserParam } from "./components/UserParam/UserParam";
import { BodyMassIndex } from "./components/BodyMassIndex/BodyMassIndex";
import { updateHeight, updateWeight } from "../../store/userSlice";

export const DrawerUserContainer = () => {
   const [open, setOpen] = useState(false);
   const userName = useSelector((state) => state.userData.userName);
   const userHeight = useSelector((state) => state.userData.userHeight);
   const userWeight = useSelector((state) => state.userData.userWeight);

   const dispatch = useDispatch();
   const onChangeHeight = (valueHeight) => {
      dispatch(updateHeight({ valueHeight }));
   };
   const onChangeWeight = (valueWeight) => {
      dispatch(updateWeight({ valueWeight }));
   };

   return (
      <>
         <Button type="primary" onClick={() => setOpen(true)}>
            Мои параметры
         </Button>

         <Drawer
            title="Мои параметры"
            placement={"right"}
            width={500}
            onClose={() => setOpen(false)}
            open={open}
            extra={<></>}
         >
            <CircleInfo userName={userName} />
            <UserParam
               userWeight={userWeight}
               userHeight={userHeight}
               onChangeHeight={onChangeHeight}
               onChangeWeight={onChangeWeight}
            />
            <BodyMassIndex bodyHeight={userHeight} bodyWeight={userWeight} />
         </Drawer>
      </>
   );
};
