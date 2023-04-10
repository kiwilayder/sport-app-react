import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./app/App";
import "./index.css";
import { ConfigProvider, theme } from "antd";
import { BrowserRouter } from "react-router-dom";
import ru from "antd/locale/ru_RU";
import "dayjs/locale/ru";
const { darkAlgorithm } = theme;

const root = createRoot(document.getElementById("root"));

root.render(
   <ConfigProvider
      locale={ru}
      theme={{
         algorithm: darkAlgorithm,
         token: {
            borderRadius: 16,
            colorPrimary: "#fcba28",
            colorText: "#fcba28",
            wireframe: true,
         },
      }}
   >
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </ConfigProvider>
);
