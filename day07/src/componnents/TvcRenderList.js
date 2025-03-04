import React from 'react'

export default function TvcRenderList() {
    const tvcList = ["Trịnh Chung", "ReactJS","Fit-NTU"];

    const tvcElement = tvcList.map(item=>{
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                tvcList.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {tvcElement}
    </div>
  )
}