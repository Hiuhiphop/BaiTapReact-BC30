import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import QuanLySinhVien from './component/baitapform/QuanLySinhVien';
import BaiTapThuKinh from './component/baitapthukinh/BaiTapThuKinh';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
            <Route path="" element={<App />} >
                <Route path='BaiTapForm' element={<QuanLySinhVien/>}/>
                <Route path='BaiTapThuKinh' element={<BaiTapThuKinh/>}/>
            </Route>

        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
