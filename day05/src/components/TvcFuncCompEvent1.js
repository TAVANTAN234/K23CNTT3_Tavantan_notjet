import React from "react";

export default function TvcFuncCompEvent1() {
  // Hàm xử lý sự kiện
  const tvcEventButton1Click = () => {
    alert("Button 1 - Clicked");
  };

  const tvcEventButton2Click = () => {
    alert("Button 2 - Clicked");
  };

  const tvcEventButton3Click = (name)=>{
    alert("Name:" + name)
  }
  return (
    <div className="alert alert-info">
      {/* <button className="btn btn-primary" onClick={tvcEventButton1Click()}>
        Button 1
      </button> */}
      <button className="btn btn-primary mx-1" onClick={tvcEventButton2Click}>
        Button 2
      </button>
      {/* <button className="btn btn-success" onClick={tvcEventButton3Click("Chung Trịnh")}>
        Button 3
      </button> */}
      <button className="btn btn-success  mx-1" onClick={()=>tvcEventButton3Click("Tạ Văn Tân")}>
        Button 4
      </button>
    </div>
  );
}