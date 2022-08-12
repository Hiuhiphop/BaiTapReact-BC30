import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  state = {
    sanPhamChiTiet: {
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
  };

  renderProduct = () => {
    return this.props.data.map((dienThoai, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem dienThoai={dienThoai} xemChiTiet={this.xemChiTiet} themGioHang={this.props.themGioHang}/>
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    console.log(sanPhamClick);
    //set lại giá trị state.sanPhamChiTiet = sản phẩm người dùng click vào
    this.setState({
      sanPhamChiTiet: sanPhamClick,
    });
  };

  render() {
    let {
      tenSP,
      maSP,
      hinhAnh,
      ram,
      rom,
      heDieuHanh,
      manHinh,
      cameraSau,
      cameraTruoc,
      giaBan,
    } = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <div className="row">{this.renderProduct()}</div>
        <div className="mt-2">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{tenSP}</h3>
              <img src={hinhAnh} alt="..." className="w-100" />
            </div>
            <div className="col-8">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <thead>
                  <tr>
                    <td>Màn hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
