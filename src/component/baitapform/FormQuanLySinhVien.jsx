import React, { Component } from "react";

export default class FormQuanLySinhVien extends Component {
  render() {
    return (
      <div className="form">
        <div className="header-form">Thông Tin Sinh Viên</div>
        <div className="body-form d-flex flex-wrap justify-content-between">
          <input type="text" placeholder="Mã sinh viên" />
          <input type="text" placeholder="Tên sinh viên" />
          <input type="text" placeholder="Số điện thoại" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="footer-form mt-3" id="addSV">
            <button className="green-button">Thêm sinh viên</button>
        </div>
        <div className="footer-form mt-3" id="changeSV">
            <button className="blue-button">Sửa sinh viên</button>
        </div>
      </div>
    );
  }
}
