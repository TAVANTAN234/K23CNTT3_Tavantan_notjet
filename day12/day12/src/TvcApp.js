import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import TvtNavNar from './components/TvtNavNar'
import TvtHome from './components/TvtHome'
import TvtAbout from './components/TvtAbout'
import TvtContact from './components/TvtContact'
import TvtListUser from './components/TvtListUser'
import TvtFormUser from './components/TvtFormUser'
export default function TvtApp() {

  const listUsers  = [
    {id:"SV001", tvtFullName:"Tạ Văn Tân", tvtUserName:"vanvan", tvtPass:"123456a@"},
    {id:"SV002", tvtFullName:"Trịnh Quan thưthư", tvtUserName:"QuanTrinh", tvtPass:"123456a@"},
    {id:"SV003", tvtFullName:"Nguyễn Quang namnam", tvtUserName:"QuangA", tvtPass:"123456a@"},
  ]

  const[tvtUsers, setTvtUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const tvtHandleAdd = (tvtParam)=>{
    console.log("tvtHandleAdd:", tvtParam);
    
    setTvtUsers(prev =>{ 
      return [
        ...prev,
        tvtParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Tạ Văn Tân - K23CNT2]</h1>
        <hr/>
        <Router>
            <TvtNavNar />
            <Routes>
                <Route path='/' element = {<TvtHome />} />
                <Route path='/about' element = {<TvtAbout />} />
                <Route path='/contact' element = {<TvtContact />} />
                <Route path='/list-user' element = {<TvtListUser  renderTvtUsers={tvtUsers}/>} />
                <Route path='/create-user' element = {<TvtFormUser  onTvtAddNew={tvtHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}
