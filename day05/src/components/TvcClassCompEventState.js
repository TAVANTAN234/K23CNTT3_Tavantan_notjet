import React, { Component } from 'react';

class TvcClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcFullName:"Tạ Văn Tân ",
            tvcAge:45,
        }
    }

    // Hàm xử lý sự kiện
    tvcEventHandleClick1 = ()=>{
        // Lấy dữ liệu trong state
        alert("FullName: " +this.state.tvcFullName + "\n Age:" + this.state.tvcAge);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.tvcEventHandleClick1}>Button 1 - Dữ liệu trong state</button>
            </div>
        );
    }
}

export default TvcClassCompEventState;