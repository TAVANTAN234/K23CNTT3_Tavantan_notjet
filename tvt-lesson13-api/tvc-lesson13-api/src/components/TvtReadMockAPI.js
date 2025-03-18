import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TvtReadMockAPI() {
    // khởi tạo state 
    const [tvtListUser, setTvtListUser] = useState([])
    // api
    const tvtApiOnline = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_tavantan/tvt_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(tvtApiOnline)
            .then((tvt_response)=>{
                setTvtListUser(tvt_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const tvtElementUser = tvtListUser.map((tvt_item, index)=>{
        return(
            <tr key={index}>
                <td>{tvt_item.tvtId}</td>
                <td>{tvt_item.tvtFullName}</td>
                <td>{tvt_item.tvtAge}</td>
                <td>{tvt_item.tvtActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   tvtElementUser
                }
            </tbody>
        </table>
    </div>
  )
}
