import logo from './logo.svg';
import './App.css';
import BaiTapComponent from './component/baitapcomponent/BaiTapComponent';
import BaiTapThuKinh from './component/baitapthukinh/BaiTapThuKinh';
import BaiTapProps from './component/baitapprops/BaiTapProps';
import QuanLySinhVien from './component/baitapform/QuanLySinhVien';

function App() {
  return (
    <div className="App">
     {/* <BaiTapComponent/> */}
     {/* <BaiTapThuKinh/> */}
     {/* <BaiTapProps/> */}
     <QuanLySinhVien/>
    </div>
  );
}

export default App;

