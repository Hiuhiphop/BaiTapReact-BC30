import React, { Component } from "react";
import danhSachHangGheData from "../../assets/data/danhSachGhe.json";
import { connect } from "react-redux";
import { datGheAction } from "../../redux/actions/BaiTapVePhimActions";

class TableGhe extends Component {
  renderHangGhe = () => {
    return danhSachHangGheData.map((hangGhe, index) => {
      // render hàng đầu tiên
      if (index === 0) {
        return (
          <div
            key={index}
            className="my-2 d-flex justify-content-between align-items-center"
          >
            <div style={{ width: "20px", fontSize: "22px", color: "black" }}>
              {hangGhe.hang}
            </div>
            {hangGhe.danhSachGhe.map((ghe, index) => {
              return (
                <div
                  key={index}
                  style={{ width: "40px", fontSize: "22px", color: "black" }}
                >
                  {ghe.soGhe}
                </div>
              );
            })}
          </div>
        );
      }
      // render các hàng còn lại
      return (
        <div
          key={index}
          className="my-2 d-flex justify-content-between align-items-center"
        >
          <div style={{ width: "20px", fontSize: "22px", color: "black" }}>
            {hangGhe.hang}
          </div>
          {hangGhe.danhSachGhe.map((ghe, index) => {
            let gheDaDat = "blue-button";
            let disabled = false;
            // ghe da dat
            if (ghe.daDat) {
              gheDaDat = "red-button";
              disabled = true;
            }
            // ghe dang duoc chon
            let gheDangDat = "";
            let gheDangDuocChon = this.props.danhSachGheDangDat.findIndex(
              (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
            );
            if (gheDangDuocChon !== -1) {
              gheDangDat = "green-button";
            }
            return (
              <button
                disabled={disabled}
                onClick={() => {
                  this.props.datGhe(ghe);
                }}
                className={`blue-button ${gheDaDat} ${gheDangDat}`}
                key={index}
              >
                {ghe.soGhe}
              </button>
            );
          })}
        </div>
      );
    });
  };
  render() {
    return (
      <div className="tableGhe col-8">
        <div className="VePhim-content">
          <div className="paper">
            <div className="text-center fs-2 bg-warning text-white rounded p-3">
              Màn hình
            </div>
            {this.renderHangGhe()}
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
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableGhe);
