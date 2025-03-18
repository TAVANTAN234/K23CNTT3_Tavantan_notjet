import React from 'react'
import TvtReadApiLocal from './components/TvtReadApiLocal'
import TvtReadMockAPI from './components/TvtReadMockAPI'
import TvtCreateMockAPI from './components/TvtCreateMockAPI'

export default function TvtApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Tạ Văn Tân</h1>
        <hr/>
        <TvtReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <TvtReadMockAPI />

        <TvtCreateMockAPI />
    </div>
  )
}