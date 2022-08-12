import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { dienThoai, xemChiTiet, themGioHang } = this.props;
    return (
      <div className="card">
        <img src={dienThoai.hinhAnh} alt="..." height={400} />
        <div className="card-body">
          <h3>{dienThoai.tenSP}</h3>
          <p>{dienThoai.giaBan.toLocaleString()}</p>
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-success"
              onClick={() => {
                // this.props.xemChiTiet(dienThoai);
                xemChiTiet(dienThoai);
              }}
            >
              Xem chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                themGioHang(dienThoai);
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
