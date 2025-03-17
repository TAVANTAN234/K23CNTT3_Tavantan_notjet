import React, { useState } from 'react'

export default function TvtFormUser({onTvtAddNew}) {

    const [id, setTvtId] = useState('')
    const [tvtFullName, setTvtFullName] = useState('')
    const [tvtUserName, setTvtUserName] = useState('')
    const [tvtPass, setTvtPass] = useState('')

    const tvtHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id, tvtFullName, tvtUserName, tvtPass)
        
        onTvtAddNew({id, tvtFullName, tvtUserName, tvtPass})
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setTvtId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='tvtFullName' value={tvtFullName} onChange={(ev)=>setTvtFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='tvtUserName' value={tvtUserName} onChange={(ev)=>setTvtUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='tvtPass' value={tvtPass} onChange={(ev)=>setTvtPass(ev.target.value)} /> </p>

            <p>
                <button name='tvtSave' onClick={tvtHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
