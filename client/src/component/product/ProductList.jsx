import axios from "axios";
import React, { useEffect, useState } from "react";
import EditProduct from "./EditProduct";

const ProductList = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openEditForm = () => {
    setIsOpen(!isOpen);
  };

  const editProduct = (info) => {
    const {
      brand,
      category1,
      category2,
      category3,
      category4,
      h_price,
      image,
      l_price,
      link,
      maker,
      mall_name,
      product_count,
      title,
      product_id,
    } = info;
    axios
      .post("/api/product?type=modify", {
        brand,
        category1,
        category2,
        category3,
        category4,
        h_price,
        image,
        l_price,
        link,
        maker,
        mall_name,
        product_count,
        title,
        product_id,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const deleteProduct = (id) => {
    axios
      .post("/api/product?type=delete", { product_id: id })
      .then((response) => {
        alert("삭제되었습니다.");
        console.log(response);
      });
  };

  return (
    <>
      <li>
        {item.title}
        <button>담기</button>
        <button onClick={openEditForm}>변경</button>
      </li>
      <div>
        {isOpen && (
          <EditProduct
            item={item}
            onEdit={editProduct}
            onDelete={deleteProduct}
          />
        )}
      </div>
    </>
  );
};

export default ProductList;
