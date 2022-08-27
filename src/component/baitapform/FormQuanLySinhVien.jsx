import React, { Component } from "react";

export default class FormQuanLySinhVien extends Component {
  state = {
    SV: {
      MaSV: "",
      TenSV: "",
      Sdt: "",
      Email: "",
    },
    errors: {
      MaSV: "",
      TenSV: "",
      Sdt: "",
      Email: "",
    },
  };
  handleChange = (e) => {
    let { id, value, placeholder } = e.target;
    let newSV = { ...this.state.SV };
    newSV[id] = value;
    let newErrors = { ...this.state.errors };
    let errorMess = "";
    if (value.trim() === "") {
      errorMess = placeholder + " không được để trống";
    }
    newErrors[id] = errorMess;
    this.setState({
      SV: newSV,
      errors: newErrors,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { SV, erros } = this.state;
    this.props.createSV(SV);
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      SV: newProps.updateSV,
    });
  }

  render() {
    let { MaSV, TenSV, Sdt, Email } = this.state.SV;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="header-form">Thông Tin Sinh Viên</div>
        <div className="body-form d-flex flex-wrap justify-content-between">
          <div className="form-items">
            <input
              value={MaSV}
              type="text"
              placeholder="Mã sinh viên"
              id="MaSV"
              name="MaSV"
              onChange={this.handleChange}
            />
            <span>{this.state.errors.MaSV}</span>
          </div>
          <div className="form-items">
            <input
              value={TenSV}
              type="text"
              placeholder="Tên sinh viên"
              id="TenSV"
              name="TenSV"
              onChange={this.handleChange}
            />
            <span>{this.state.errors.TenSV}</span>
          </div>
          <div className="form-items">
            <input
              value={Sdt}
              type="text"
              placeholder="Số điện thoại"
              id="Sdt"
              name="Sdt"
              onChange={this.handleChange}
            />
            <span>{this.state.errors.Sdt}</span>
          </div>
          <div className="form-items">
            <input
              value={Email}
              type="email"
              placeholder="Email"
              id="Email"
              name="Email"
              onChange={this.handleChange}
            />
            <span>{this.state.errors.Email}</span>
          </div>
        </div>
        <div className="footer-form mt-5" id="addSV">
          <button className="green-button">Thêm sinh viên</button>
          <button
            type="button"
            className="blue-button ms-4"
            onClick={() => {
              this.props.SvUpdate(this.state.SV);
            }}
          >
            Sửa sinh viên
          </button>
        </div>
      </form>
    );
  }
}
