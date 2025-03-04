import React, { Component } from "react";

class TvcClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý sự kiện
    tvcEventHandleClick = ()=>{
        // Chuyển dữ liệu lên App thông qua props
        this.props.onTvcDataToApp("Dữ liệu từ component con - TvcClassCompEventPostData");
    }
  render() {
    return (
      <div className="alert alert-success">
        <button className="btn btn-primary"
            onClick={this.tvcEventHandleClick}>
                Button 1 - Chuyển dữ liệu lên App
        </button>
      </div>
    );
  }
}

export default TvcClassCompEventPostData;