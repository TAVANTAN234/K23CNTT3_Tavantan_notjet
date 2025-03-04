import React, { Component } from 'react';

class TvcClassCompEvent1 extends Component {
    // Hàm xử lý sự kiện
    tvcEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    tvcEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }

    render() {
        return (
            <div className="alert alert-danger">
                <button className='btn btn-primary mx-1' onClick={this.tvcEventHandleClick1}>Button 1</button>
                <button className='btn btn-success mx-1' 
                    onClick={()=>this.tvcEventHandleClick2("Chung Trịnh")}>Button 2</button>
            </div>
        );
    }
}

export default TvcClassCompEvent1;