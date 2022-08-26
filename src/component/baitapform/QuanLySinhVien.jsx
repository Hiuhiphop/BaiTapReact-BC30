import React, { Component } from "react";
import "../../ultil/skeuos-css-master/css/skeuos.css";
import "../../assets/css/BaiTapForm.css";
import FormQuanLySinhVien from "./FormQuanLySinhVien";
import TableQuanLySinhVien from "./TableQuanLySinhVien";
import SearchSinhVien from "./SearchSinhVien";

export default class QuanLySinhVien extends Component {
  render() {
    return (
      <div className="wrap-content">
        <div className="content">
          <div className="paper" style={{ width: "900px", margin: "auto" }}>
            <FormQuanLySinhVien/>
            <SearchSinhVien/>
            <TableQuanLySinhVien/>
          </div>
        </div>
      </div>
    );
  }
}
