import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { BioParamUser } from "../BioParamUser/BioParamUser";
import style from "./DrawerUser.module.css";

export const DrawerUser = () => {
   const [open, setOpen] = useState(false);

   const showDrawer = () => {
      setOpen(true);
   };

   const onClose = () => {
      setOpen(false);
   };

   return (
      <>
         <Button type="primary" onClick={showDrawer}>
            Мои параметры
         </Button>

         <Drawer
            title="Мои параметры"
            placement={"right"}
            width={500}
            onClose={onClose}
            open={open}
            extra={<></>}
         >
            <BioParamUser />
         </Drawer>
      </>
   );
};
