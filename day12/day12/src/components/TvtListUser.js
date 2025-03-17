import React from 'react'

export default function TvtListUser({renderTvtUsers}) {

    const tvtElements = renderTvtUsers.map((tvtItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{tvtItem.id}</td>
                    <td>{tvtItem.tvtFullName}</td>
                    <td>{tvtItem.tvtUserName}</td>
                    <td>{tvtItem.tvtPass}</td>
                </tr>
            </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {tvtElements}
            </tbody>
        </table>
    </div>
  )
}