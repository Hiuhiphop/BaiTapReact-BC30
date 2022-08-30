import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import QuanLySinhVien from "./component/baitapform/QuanLySinhVien";
import BaiTapThuKinh from "./component/baitapthukinh/BaiTapThuKinh";
import BaiTapVePhim from "./component/baitapvephim/BaiTapVePhim";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducer/rootReducer";
import BaiTapProps from "./component/baitapprops/BaiTapProps";
import BaiTapComponent from "./component/baitapcomponent/BaiTapComponent";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="BaiTapComponent" element={<BaiTapComponent />} />
          <Route path="BaiTapProps" element={<BaiTapProps />} />
          <Route path="BaiTapForm" element={<QuanLySinhVien />} />
          <Route path="BaiTapThuKinh" element={<BaiTapThuKinh />} />
          <Route path="BaiTapVePhim" element={<BaiTapVePhim />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
