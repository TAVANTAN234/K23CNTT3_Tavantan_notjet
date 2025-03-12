import React, { useState } from 'react';
import TvtProductList from './components/TvtProductList';
import TvtProductAdd from './components/TvtProductAdd';

export default function TvtApp() {
  const tvtProduct = [
    { tvtpId: "231090009595", tvtpName: "Tạ Văn Tân", tvtpQuantity: 20, tvtpPrice: 20000 },
    { tvtpId: "SP001", tvtpName: "hoa Tài Lộc", tvtpQuantity: 100, tvtpPrice: 835113 },
    { tvtpId: "SP002", tvtpName: "hoa Phong Thủy", tvtpQuantity: 345, tvtpPrice: 664864 },
    { tvtpId: "SP003", tvtpName: "hoa Cảnh", tvtpQuantity: 720, tvtpPrice: 1648653 },
  ];
  
  const [tvtProductList, setTvtProductList] = useState(tvtProduct);

  // Function to add a new product
  const tvtAddNewProduct = (tvtNewProduct) => {
    setTvtProductList((tvtPrevProducts) => [...tvtPrevProducts, tvtNewProduct]);
  };

  return (
    <div className="container-fluid">
      <TvtProductAdd tvtAddNewProduct={tvtAddNewProduct} />
      <TvtProductList tvtProductList={tvtProductList} />
    </div>
  );
}
