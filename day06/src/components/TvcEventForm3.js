import React, { Component } from 'react';

class TvcEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    tvcHandleChange = (event)=>{
        this.setState({
            tvcGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    tvcHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.tvcGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='tvcGioiTinh'  id='tvcNam' className='mx-2'
                            value="Nam" checked={this.state.tvcGioiTinh === 'Nam'} onChange={this.tvcHandleChange}/> 
                            <label htmlFor='tvcNam'>Nam</label>  
                        <input type='radio' name='tvcGioiTinh'  id='tvcNu' className='mx-2'
                            value="Nữ" checked={this.state.tvcGioiTinh === 'Nữ'} onChange={this.tvcHandleChange}/> 
                            <label htmlFor='tvcNu'>Nữ</label>  
                        <input type='radio' name='tvcGioiTinh' id='tvcKhac' className='mx-2'
                            value="Khác" checked={this.state.tvcGioiTinh === 'Khác'} onChange={this.tvcHandleChange}/> 
                            <label htmlFor='tvcKhac'>Khác</label>
                    </div>
                    <button onClick={this.tvcHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TvcEventForm3;