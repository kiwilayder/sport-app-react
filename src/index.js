import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./app/App";
import "./index.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import ru from "antd/locale/ru_RU";
import "dayjs/locale/ru";

const root = createRoot(document.getElementById("root"));

root.render(
   <ConfigProvider
      locale={ru}
      theme={{
         token: {
            colorPrimary: "#fcba28",
            fontSize: 14,
            borderRadius: 16,
            wireframe: true,
            colorText: "#9a721b",
            colorFillTertiary: "#ffffff",
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
