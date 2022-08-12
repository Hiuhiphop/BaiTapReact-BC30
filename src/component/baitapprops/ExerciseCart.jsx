import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "/assets/img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "/assets/img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "/assets/img/applephone.jpg",
  },
];

export default class ExerciseCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPham: [],
    };
  }

  themGioHang = (spChon) => {
    let spGioHang = {
      maSP: spChon.maSP,
      tenSP: spChon.tenSP,
      giaBan: spChon.giaBan,
      hinhAnh: spChon.hinhAnh,
      soLuong: 1,
    };
    let gioHangCapNhat = [...this.state.sanPham];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }
    this.setState({
      sanPham: gioHangCapNhat,
    });
  };

  xoaGioHang = (maSP) => {
    console.log(maSP);
    let gioHangCapNhat = [...this.state.sanPham];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    this.setState({
      sanPham: gioHangCapNhat,
    });
  };

  tangSoLuong = (maSP) => {
    let gioHangCapNhat = [...this.state.sanPham];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    }
    this.setState({
      sanPham: gioHangCapNhat,
    });
  };
  giamSoLuong = (maSP) => {
    let gioHangCapNhat = [...this.state.sanPham];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    this.setState({
      sanPham: gioHangCapNhat,
    });
  };
  render() {
    let tongSoLuong = this.state.sanPham.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div>
        <div className="container">
          <h3 className="text-center text-success">Bài Tập Props</h3>
          <Cart
            gioHang={this.state.sanPham}
            xoaGioHang={this.xoaGioHang}
            tangSoLuong={this.tangSoLuong}
            giamSoLuong={this.giamSoLuong}
          />
          <div className="text-end">
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Giỏ Hàng ({tongSoLuong})
            </button>
          </div>
          <ProductList data={data} themGioHang={this.themGioHang} />
        </div>
      </div>
    );
  }
}
