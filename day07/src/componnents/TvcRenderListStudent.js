import React, { Component } from 'Tạ Văn Tân';

class TvcRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcStudents:[
                {tcvId:"NTU001",tvcName:"Tạ Văn TânTân", tvcAge:46, tvcClass:"K23CNT2"},
                {tcvId:"NTU002",tvcName:"Nguyễn Quang VănVăn", tvcAge:22, tvcClass:"K23CNT2"},
                {tcvId:"NTU003",tvcName:"Nguyễn thuận quyquy", tvcAge:21, tvcClass:"K23CNT2"},
                {tcvId:"NTU004",tvcName:"Nguyễn Quang Chịhị", tvcAge:23, tvcClass:"K23CNT2"},
            ],
        }
    }
    render() {
        let tvcElement = this.state.tvcStudents.map((tvcItem, index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{tvcItem.tcvId}</td>
                        <td>{tvcItem.tvcName}</td>
                        <td>{tvcItem.tvcAge}</td>
                        <td>{tvcItem.tvcClass}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>tvcId</th>
                            <th>tvcName</th>
                            <th>tvcAge</th>
                            <th>tvcClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tvcElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TvcRenderListStudent;