import React, { Component } from 'react';
import TvcFuncCompEvent1 from './components/TvcFuncCompEvent1';
import TvcClassCompEvent1 from './components/TvcClassCompEvent1';
import TvcFuncCompEventProps from './components/TvcFuncCompEventProps';
import TvcClassCompEventProps from './components/TvcClassCompEventProps';
import TvcClassCompEventState from './components/TvcClassCompEventState';
import TvcClassCompEventPostData from './components/TvcClassCompEventPostData';

class TvcApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcNoiDung:"Chưa có gì",
        }
    }
    // Hàm xử lý sự kiện khi component con chuyển dữ liệu lên
    tvcHandleDataToApp = (content)=>{
        alert(content);
        this.setState({
            tvcNoiDung:content,
        })
    }
    render() {
        return (
            <div className='container border mt-3'>
                <h1 className='text-center alert alert-info my-2'>K23CNT1 - Trịnh Văn Chung - Event and Form</h1>
                <hr/>
                <div>
                    <h2>Function Component  - Event</h2>
                    <TvcFuncCompEvent1 />
                </div>
                <hr/>
                <div>
                    <h2>Class Component - Event</h2>
                    <TvcClassCompEvent1 />
                </div>
                <hr/>
                <div>
                    <h2>Function Component - Event; props</h2>
                    <TvcFuncCompEventProps tvcRenderName="Trịnh Văn Chung" />
                </div>
                <hr/>
                <div>
                    <h2>Class Component - Event; props</h2>
                    <TvcClassCompEventProps tvcRenderTitle = "Welcome to Chung Chunng"/>
                </div>

                <div>
                    <h2>Class Component - Event; state</h2>
                    <TvcClassCompEventState />
                </div>
                <div>
                    <h1>{this.state.tvcNoiDung}</h1>
                    <h2>Class Component - Event; Post Data to App </h2>
                    <TvcClassCompEventPostData onTvcDataToApp={this.tvcHandleDataToApp} />
                </div>
            </div>
        );
    }
}

export default TvcApp;