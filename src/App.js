import "./ultil/skeuos-css-master/css/skeuos.min.css";
import "./App.css";
import BaiTapComponent from "./component/baitapcomponent/BaiTapComponent";
import BaiTapThuKinh from "./component/baitapthukinh/BaiTapThuKinh";
import BaiTapProps from "./component/baitapprops/BaiTapProps";
import QuanLySinhVien from "./component/baitapform/QuanLySinhVien";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            React BC30
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/BaiTapThuKinh">
                  Bài tập thử kính
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/BaiTapForm">
                  Bài tập from
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/BaiTapVePhim">
                  Bài tập vé phim
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
