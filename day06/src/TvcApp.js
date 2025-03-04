import React, { Component } from 'react';
import TvcEventForm1 from './components/TvcEventForm1';
import TvcEventForm2 from './components/TvcEventForm2';
import TvcEventForm3 from './components/TvcEventForm3';
import TvcEventForm4 from './components/TvcEventForm4';
import TvcEventForm5 from './components/TvcEventForm5';
import TvcRenderCondition from './components/TvcRenderCondition';
import TvcRenderArray from './components/TvcRenderArray';
import TvcRenderListObject from './components/TvcRenderListObject';

class TvcApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  tvcHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <TvcEventForm1 />
          <TvcEventForm2 />
          <TvcEventForm3 />
          <TvcEventForm4 />
          <TvcEventForm5 onTvcHandleSubmit={this.tvcHandleSubmitForm}/>

          <TvcRenderCondition />
          <TvcRenderArray />

          <TvcRenderListObject />
      </div>
    );
  }
}

export default TvcApp;