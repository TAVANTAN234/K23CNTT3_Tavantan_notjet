import React, { Component } from 'react';
import TvcLoginControl from './components/TvcLoginControl';
import TvcRenderList from './components/TvcRenderList';
import TvcRenderListStudent from './components/TvcRenderListStudent';

class TvcApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
          <h1 className='text-center'>Tạ Văn Tân - Render condition, List key</h1>
          <hr/>
          <TvcLoginControl />

          <TvcRenderList />

          <TvcRenderListStudent />
      </div>
    );
  }
}

export default TvcApp;