import React, { Component } from "react";
import "../../ultil/skeuos-css-master/css/skeuos.css";
import "../../assets/css/BaiTapForm.css";
import FormQuanLySinhVien from "./FormQuanLySinhVien";
import TableQuanLySinhVien from "./TableQuanLySinhVien";

export default class QuanLySinhVien extends Component {
  state = {
    arrSV: [
      {
        MaSV: "0302",
        TenSV: "le thanh hieu",
        Sdt: "0926999351",
        Email: "yonder321405@gmail.com",
      },
      {
        MaSV: "0301",
        TenSV: "le thanh hieu",
        Sdt: "0926999351",
        Email: "yonder321405@gmail.com",
      },
      {
        MaSV: "0300",
        TenSV: "le thanh hieu",
        Sdt: "0926999351",
        Email: "yonder321405@gmail.com",
      },
    ],
    updateSV: {
      MaSV: "",
      TenSV: "",
      Sdt: "",
      Email: "",
    },
    findSV: [],
  };
  createSV = (newSV) => {
    let SVUpdate = this.state.arrSV;
    SVUpdate.push(newSV);
    this.setState({
      arrSV: SVUpdate,
    });
  };
  delSV = (idClick) => {
    console.log(idClick);
    let arrSVUpdate = this.state.arrSV;
    arrSVUpdate = arrSVUpdate.filter((sv) => sv.MaSV !== idClick);
    this.setState({
      arrSV: arrSVUpdate,
    });
  };
  editSV = (svEdit) => {
    this.setState({
      updateSV: svEdit,
    });
  };
  SvUpdate = (svUpdate) => {
    let SinhVienUpdate = this.state.arrSV.find(
      (sv) => sv.MaSV === svUpdate.MaSV
    );
    for (let key in SinhVienUpdate) {
      SinhVienUpdate[key] = svUpdate[key];
    }
    this.setState({
      arrSV: this.state.arrSV,
    });
    console.log(svUpdate);
  };
  searchSV = (e) => {
    let { value } = e.target;
    let arrSVUpdate = this.state.arrSV;
    let name = arrSVUpdate.filter((SV) => {
      return SV.TenSV.includes(value);
    });

    if (value) {
      this.setState({
        findSV: name,
      });
    } else {
      this.setState(
        {
          findSV: this.state.arrSV,
        },
        () => console.log(this.state.findSV)
      );
    }
  };

  render() {
    return (
      <div className="wrap-content">
        <div className="content">
          <div className="paper" style={{ width: "900px", margin: "auto" }}>
            <FormQuanLySinhVien
              createSV={this.createSV}
              updateSV={this.state.updateSV}
              SvUpdate={this.SvUpdate}
            />
            <TableQuanLySinhVien
              searchSV={this.searchSV}
              findSV={this.state.findSV}
              arrSV={this.state.arrSV}
              delSV={this.delSV}
              editSV={this.editSV}
            />
          </div>
        </div>
      </div>
    );
  }
}
