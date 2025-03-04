import React, { Component } from 'react';

class TvcEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcName:'VănVăn',
            tvcAge:45,
            tvcGender:'Female',
            tvcCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    tvcHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    tvcHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.tvcName + "\n" + this.state.tvcAge);

        // Chuyển dữ liệu trên form lên App component (TvcApp);
        this.props.onTvcHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='tvcName'>Student Name:</label>
                        <input type='text' name='tvcName' id='tvcName' 
                            value={this.state.tvcName}
                            onChange={this.tvcHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='tvcAge'>Student Age:</label>
                        <input type='text' name='tvcAge' id='tvcAge' 
                            value={this.state.tvcAge}
                            onChange={this.tvcHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='tvcGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='tvcGender' id='tvcMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.tvcGender === 'Male'}
                                onChange={this.tvcHandleChange} />
                            <label htmlFor='tvcMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='tvcGender' id='tvcFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.tvcGender === 'Female'}
                                onChange={this.tvcHandleChange} />
                            <label htmlFor='tvcFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='tvcGender' id='tvcNone' className='mx-2'
                                value={'None'}
                                checked={this.state.tvcGender === 'None'}
                                onChange={this.tvcHandleChange} />
                            <label htmlFor='tvcNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='tvcCourse'>
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
                    </div>
                    <button onClick={this.tvcHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TvcEventForm5;