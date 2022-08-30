import React, { Component } from "react";
import "../../assets/css/BaiTapVePhim.css";
import FormChonGhe from "./FormChonGhe";
import TableGhe from "./TableGhe";

export default class BaiTapVePhim extends Component {
  render() {
    return (
      <div className="BaiTapVePhim">
        <h3 className="text-center text-white fw-bold fs-1">
          Đặt vé xem phim CyberCinema
        </h3>
        <div className="container-fluid">
          <div className="row">
            <TableGhe/>
            <FormChonGhe />
          </div>
        </div>
      </div>
    );
  }
}
