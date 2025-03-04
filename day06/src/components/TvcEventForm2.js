import React, { Component } from 'react';

class TvcEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            tvcCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    tvcHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            tvcCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    tvcHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.tvcCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='tvcCourse' id='tvcCourse' 
                            value={this.state.tvcCourse}
                            onChange={this.tvcHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.tvcHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default TvcEventForm2;