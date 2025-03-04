import React, { Component } from 'react';

class TvcEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcStudentName:'Văn Tân',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (tvcStudentName) thay đổi
    tvcHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            tvcStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    tvcHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.tvcStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.tvcHandleSubmit}>
                    <label htmlFor='tvcStudentName'>
                        <input type='text' name='tvcStudentName' id='tvcStudentName' 
                            value={this.state.tvcStudentName}
                            onChange={this.tvcHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default TvcEventForm1;