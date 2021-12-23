import axios from "axios";
import React from "react";
import { ListGroupItem, Button } from "reactstrap";

const NaverProduct = ({ items }) => {
  const {
    brand,
    category1,
    category2,
    category3,
    category4,
    hprice,
    image,
    link,
    lprice,
    maker,
    mallName,
    productId,
    productType,
    title,
  } = items;

  const addProduct = () => {
    axios
      .post("/api/naverApi?type=save", {
        brand,
        category1,
        category2,
        category3,
        category4,
        h_price: hprice,
        image,
        link,
        l_price: lprice,
        maker,
        mall_name: mallName,
        product_id: productId,
        productType,
        product_count: 1,
        title,
      })
      .then((response) => {
        alert("상품 등록 성공");
      });
  };

  return (
    <ListGroupItem>
      <img src={image} alt="product" />
      {title}
      <Button onClick={addProduct}>등록</Button>
    </ListGroupItem>
  );
};

export default NaverProduct;
