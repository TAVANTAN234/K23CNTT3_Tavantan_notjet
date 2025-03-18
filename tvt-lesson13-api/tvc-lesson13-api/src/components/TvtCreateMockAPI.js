import React, { useState } from 'react'
import axios from 'axios'
export default function TvtCreateMockAPI() {
    // khởi tạo state
    const [tvtFullName,setTvtFullName] = useState('')
    const [tvtAge,setTvtAge] = useState(0)
    const [tvtActive,setTvtActive] = useState(true)

    // api post
    const tvtCreateUserApi = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_tavantan/tvt_users";

    // khi submit form
    const tvtHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("tvtActive:",tvtActive);
        let tvtNewUser = {tvtFullName,tvtAge,tvtActive};
        console.log(tvtNewUser);

        // ghi dữ liệu vào api
        axios
            .post(tvtCreateUserApi, tvtNewUser)
            .then((tvt_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="tvtFullName">Full Name</label>
                <input type='text' name='tvtFullName' id="tvtFullName" 
                    value={tvtFullName}
                    onChange={(ev)=>setTvtFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="tvtAge">Age</label>
                <input type='number' name='tvtAge' id="tvtAge" 
                    value={tvtAge}
                    onChange={(ev)=>setTvtAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="tvtActive">Active</label>
                <input type='radio' name='tvtActive' id="tvtActive_hd" value={'true'} 
                    onChange={(ev)=>setTvtActive(ev.target.value)} />
                    <label for="tvtActive_hd"> Hoạt động</label>
                <input type='radio' name='tvtActive' id="tvtActive_kh" value={'false'} 
                    onChange={(ev)=>setTvtActive(ev.target.value)}/>
                    <label for="tvtActive_kh"> Khóa</label>
            </div>
            <button onClick={tvtHandleSubmit}>Create</button>
        </form>
    </div>
  )
}