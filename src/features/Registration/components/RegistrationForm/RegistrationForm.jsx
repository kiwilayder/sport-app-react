import React from "react";
import { Select, Form, Input, DatePicker, Slider, Button } from "antd";
import style from "./RegistrationForm.module.css";

export const RegistrationForm = ({ onFinishForm }) => {
   const { Option } = Select;

   return (
      <div className={style.bgform}>
         <Form
            className={style.form}
            name="basic"
            labelCol={{
               span: 6,
            }}
            wrapperCol={{
               span: 15,
            }}
            style={{
               maxWidth: 1000,
            }}
            onFinish={onFinishForm}
            autoComplete="off"
         >
            <Form.Item
               className={style.formItem}
               label="Имя"
               name="userName"
               rules={[
                  {
                     required: true,
                     message: "Пожалуйста, введите имя",
                  },
               ]}
            >
               <Input />
            </Form.Item>
            <Form.Item
               className={style.formItem}
               label="Почта"
               name="mail"
               rules={[
                  {
                     required: true,
                     message: "Пожалуйста, введите почту",
                  },
               ]}
            >
               <Input />
            </Form.Item>

            <Form.Item
               className={style.formItem}
               label="Пароль"
               name="password"
               rules={[
                  {
                     required: true,
                     message: "Пожалуйста, введите пароль",
                  },
               ]}
            >
               <Input.Password />
            </Form.Item>
            <Form.Item
               className={style.formItem}
               name="gender"
               label="Пол"
               rules={[
                  {
                     required: true,
                     message: "Пожалуйста, выберите пол",
                  },
               ]}
            >
               <Select allowClear>
                  <Option value="male">Мужчина</Option>
                  <Option value="female">Женщина</Option>
               </Select>
            </Form.Item>
            <Form.Item
               className={style.formItem}
               name="dateBirth"
               label="Дата рождения"
               rules={[
                  {
                     required: true,
                     message: "Пожалуйста, выберите дату",
                  },
               ]}
            >
               <DatePicker format="DD.MM.YYYY" />
            </Form.Item>
            <Form.Item
               className={style.formItem}
               name="userWeight"
               label="Ваш вес (кг) "
               rules={[
                  {
                     required: true,
                     message: "Пожалуйста, выберите вес",
                  },
               ]}
            >
               <Slider min={40} max={150} />
            </Form.Item>
            <Form.Item
               className={style.formItem}
               name="userHeight"
               label="Ваш рост (см) "
               rules={[
                  {
                     required: true,
                     message: "Пожалуйста, выберите рост",
                  },
               ]}
            >
               <Slider min={100} max={210} />
            </Form.Item>
            <Form.Item
               wrapperCol={{
                  push: 15,
               }}
            >
               <Button className={style.button} htmlType="submit">
                  Далее...
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};
