import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TvtReadApiLocal() {
    // khởi tạo state
    const [tvtListUser, setTvtListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho tvtListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((tvtResponse)=>{
                setTvtListUser(tvtResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    tvtListUser.map((tvtItem, index)=>{
                        return (
                            <tr key={index}>
                                <td>{tvtItem.fullName}</td>
                                <td>{tvtItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}