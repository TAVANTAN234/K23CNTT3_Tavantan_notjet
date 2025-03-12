import React, { useState } from 'react';

export default function TvtProductAdd({ tvtAddNewProduct }) {
  const [tvtProduct, setTvtProduct] = useState({
    tvtpId: '',
    tvtpName: '',
    tvtpQuantity: '',
    tvtpPrice: '',
  });

  const tvtHandleChange = (e) => {
    const { name, value } = e.target;
    setTvtProduct({ ...tvtProduct, [name]: value });
  };

  const tvtHandleSubmit = (e) => {
    e.preventDefault();
    if (tvtProduct.tvtpId && tvtProduct.tvtpName && tvtProduct.tvtpQuantity && tvtProduct.tvtpPrice) {
      tvtAddNewProduct(tvtProduct);
      setTvtProduct({
        tvtpId: '',
        tvtpName: '',
        tvtpQuantity: '',
        tvtpPrice: '',
      });
    } else {
      alert('Vui Lòng Nhập Tất Cả Các Dữ Liệu');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded">
        <h3 className="card-header text-center bg-success text-white">Thêm Sản Phẩm Mới</h3>
        <form onSubmit={tvtHandleSubmit}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="tvtpId" className="form-label">tvtpID</label>
              <input
                type="text"
                className="form-control"
                id="tvtpId"
                name="tvtpId"
                value={tvtProduct.tvtpId}
                onChange={tvtHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tvtpName" className="form-label">tvtpName</label>
              <input
                type="text"
                className="form-control"
                id="tvtpName"
                name="tvtpName"
                value={tvtProduct.tvtpName}
                onChange={tvtHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tvtpQuantity" className="form-label">tvtpQuantity</label>
              <input
                type="number"
                className="form-control"
                id="tvtpQuantity"
                name="tvtpQuantity"
                value={tvtProduct.tvtpQuantity}
                onChange={tvtHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tvtpPrice" className="form-label">tvtpPrice</label>
              <input
                type="number"
                className="form-control"
                id="tvtpPrice"
                name="tvtpPrice"
                value={tvtProduct.tvtpPrice}
                onChange={tvtHandleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Thêm Sản Phẩm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
