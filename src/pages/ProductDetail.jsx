import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          {/* 상대경로(path) 기준으로 이전 페이지로 이동 */}
          {/* relative='route' 였다면 초기 페이지로 가게 됨 */}
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
