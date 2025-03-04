import React, { Component } from 'react';

class TvcRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcStudents :[
                {tvcId:1,tvcName:"Tạ Văn Tân", tvcAge:46},
                {tvcId:2,tvcName:"Nguyễn Quang tuấn", tvcAge:20},
                {tvcId:3,tvcName:"Nguyễn Quang trung", tvcAge:22},
                {tvcId:4,tvcName:"Nguyễn Quang Chị", tvcAge:21},
            ],
        }
    }

    
    render() {
        // Hiển thị dữ liệu
        let {tvcStudents} = this.state;
        let tvcElement = tvcStudents.map((tvcItem)=>{
            return (
                <li>{tvcItem.tvcId} - {tvcItem.tvcName}</li>
            );
        })

        let tvcRenderElement = tvcStudents.map((tvcItem,index)=>{
            return (
                <tr key={index}>
                    <td>{tvcItem.tvcId}</td>
                    <td>{tvcItem.tvcName}</td>
                    <td>{tvcItem.tvcAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                {tvcElement}
                <hr/>
                <h2> Ở trên xấu quá; -- sử dụng css</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>TvcID</th>
                            <th>TvcName</th>
                            <th>TvcAge</th>
                            <th>TvcAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {tvcRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TvcRenderListObject;