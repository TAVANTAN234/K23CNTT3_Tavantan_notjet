import './App.css';
import TvcCompA from './components/TvcCompA';

function App() {
  return (
    <div className="App">
      <h1>Trinh Van Chung - K23CNT - ReactJS</h1>
      <hr/>
      {/* Sử dụng component TvcCompA  */}
      <TvcCompA />
      <TvcCompA tvcName="Tạ Văn TÂN" tvcAddress="25 Vũ Ngọc Phan" />
    </div>
  );
}