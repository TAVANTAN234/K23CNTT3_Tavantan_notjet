import React from 'react';

export default function TvtProductList({ tvtProductList }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded">
        <h3 className="card-header text-center bg-primary text-white">Danh Sách Sản Phẩm</h3>
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>tvtpID</th>
              <th>tvtpName</th>
              <th>tvtpQuantity</th>
              <th>tvtpPrice</th>
            </tr>
          </thead>
          <tbody>
            {tvtProductList.map((tvtItem) => (
              <tr key={tvtItem.tvtpId}>
                <td>{tvtItem.tvtpId}</td>
                <td>{tvtItem.tvtpName}</td>
                <td>{tvtItem.tvtpQuantity}</td>
                <td>{tvtItem.tvtpPrice.toLocaleString()}</td> {/* Added number formatting */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
