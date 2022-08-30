import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/actions/BaiTapVePhimActions";

class FormChonGhe extends Component {
  render() {
    return (
      <div className="FormChonGhe col-4">
        <div className="VePhim-content">
          <div className="paper">
            <p className="fs-2 text-center text-dark">Thông tin ghế</p>
            <div className="status">
              <div className="status-items d-flex">
                <div className="status-icon green-button"></div>
                <span className="fs-4">: Ghế đang chọn </span>
              </div>
              <div className="status-items d-flex">
                <div className="status-icon red-button"></div>
                <span className="fs-4">: Ghế đã có người </span>
              </div>
              <div className="status-items d-flex">
                <div className="status-icon blue-button"></div>
                <span className="fs-4">: Ghế đang trống </span>
              </div>
            </div>
            <div className="mt-5">
              <table className="table fs-4">
                <thead>
                  <tr>
                    <td>Số ghế</td>
                    <td>Giá</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                    return (
                      <tr key={index}>
                        <td>{gheDangDat.soGhe}</td>
                        <td>{gheDangDat.gia}</td>
                        <td>
                          <button
                            onClick={() => {
                              this.props.huyGhe(gheDangDat.soGhe);
                            }}
                            style={{ width: "60px" }}
                            className="button red-button"
                          >
                            Hủy
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="text-danger fw-bold">Tong tien</td>
                    <td className="text-danger fw-bold">
                      {this.props.danhSachGheDangDat.reduce(
                        (giaTien, gheDangDat, index) => {
                          return (giaTien += gheDangDat.gia);
                        },
                        0
                      )}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapVePhimReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (soGhe) => {
      dispatch(huyGheAction(soGhe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormChonGhe);
