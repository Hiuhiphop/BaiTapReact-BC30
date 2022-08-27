import React, { Component } from "react";

export default class TableQuanLySinhVien extends Component {
  render() {
    return (
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="Tìm sinh viên"
            className="w-100"
            onChange={this.props.searchSV}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SV</th>
              <th>Tên sinh viên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.arrSV.map((SV, index) => {
              return (
                <tr key={index}>
                  <td>{SV.MaSV}</td>
                  <td>{SV.TenSV}</td>
                  <td>{SV.Sdt}</td>
                  <td>{SV.Email}</td>
                  <td>
                    <button
                      className="blue-button table-button"
                      onClick={() => {
                        this.props.editSV(SV);
                      }}
                    >
                      <i className="bi bi-pencil-square" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="red-button table-button"
                      onClick={() => {
                        this.props.delSV(SV.MaSV);
                      }}
                    >
                      <i className="bi bi-trash" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
