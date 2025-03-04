import React, { Component } from 'react';

class TvcClassCompEventProps extends Component {

    // Hàm xử lý sự kiện
    tvcEventHandleClick1 = ()=>{
        alert("Hello...." + this.props.tvcRenderTitle);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.tvcEventHandleClick1}>Button 1</button>
            </div>
        );
    }
}

export default TvcClassCompEventProps;