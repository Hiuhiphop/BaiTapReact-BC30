import React, { Component } from "react";

export default class Cart extends Component {
  // incrementCount = () => {
  //   count = count + 1;
  //   setCount(count);
  // };
  // decrementCount = () => {
  //   count = count - 1;
  //   setCount(count);
  // };

  renderGioHang = () => {
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>
            <img src={spGH.hinhAnh} alt="" style={{ width: "50px" }} />
          </td>
          <td>{spGH.tenSP}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.tangSoLuong(spGH.maSP);
              }}
            >
              +
            </button>{" "}
            {spGH.soLuong}{" "}
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.giamSoLuong(spGH.maSP);
              }}
            >
              -
            </button>
          </td>
          <td>{spGH.giaBan}</td>
          <td>{spGH.giaBan * spGH.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(spGH.maSP);
              }}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "800px", width: "800px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ hàng
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Mã sản phẩm</td>
                    <td>Hình ảnh</td>
                    <td>Tên sản phẩm</td>
                    <td>Số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>{this.renderGioHang()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}>
                    </td>
                    <td>Tổng tiền: </td>
                    <td>{this.props.gioHang.reduce((tongTien, spGioHang,index) => {
                      return tongTien = spGioHang.soLuong * spGioHang.giaBan
                    },0)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button type="button" className="btn btn-primary">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
