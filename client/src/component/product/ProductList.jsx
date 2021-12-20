import axios from "axios";
import React, { useState } from "react";
import EditProduct from "./EditProduct";

const ProductList = ({ item, user_id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartId, setCartId] = useState("");

  const addCart = () => {
    // 카트 아이디부터 조회
    axios.post("/api/cart?type=cart_id", { user_id }).then((response) => {
      const result = response.data.json[0].cart_id;
      setCartId(result);
    });

    // 조회 후 바로 장바구니 담기
    axios
      .post("/api/cart?type=save", {
        user_id,
        product_id: item.product_id,
        cart_id: cartId,
      })
      .then((response) => {
        alert("장바구니에 담겼습니다.");
      });
  };

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
        <button onClick={addCart}>담기</button>
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
