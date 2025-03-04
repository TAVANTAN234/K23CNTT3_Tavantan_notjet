import React from 'react'

export default function TvcRenderArray() {

    const tvcNumbers = [10,20,30,40,50];
    const tvcElement = tvcNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {tvcElement}
    </div>
  )
}