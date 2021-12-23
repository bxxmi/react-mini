import axios from "axios";
import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import PayInfo from "./PayInfo";

const CART_ID = "20211220CART000096";

const Cart = ({ userId }) => {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // 장바구니 리스트 조회
  useEffect(() => {
    axios.post("/api/cart?type=list", { user_id: userId }).then((response) => {
      const result = response.data.json;
      setCartList(result);
    });
  }, [setCartList]);

  // 장바구니 합계 계산
  useEffect(() => {
    axios
      .post("/api/cart?type=totalPrice", {
        user_id: userId,
        cart_id: CART_ID,
      })
      .then((response) => {
        const result = response.data.json[0].total_price;
        setTotalPrice(result);
      });
  }, [setTotalPrice]);

  // 결제 진행
  const payProduct = (info) => {
    console.log(info);

    const {
      receive_user,
      receive_user_tel1,
      receive_user_tel2,
      receive_user_tel3,
      receive_address1,
      receive_address2,
      receive_address3,
      cart_dv,
      card_user,
      card_number1,
      card_number2,
      card_number3,
      card_number4,
      card_month,
      card_year,
    } = info;

    // 주문
    axios
      .post("/api/cart?type=order", {
        receive_user,
        receive_user_tel1,
        receive_user_tel2,
        receive_user_tel3,
        receive_address1,
        receive_address2,
        receive_address3,
        cart_dv,
        card_user,
        card_number1,
        card_number2,
        card_number3,
        card_number4,
        card_month,
        card_year,
        cart_id: CART_ID,
        user_id: userId,
        complete_yn: "Y",
        total_price: totalPrice,
      })
      .then((response) => {
        console.log(response);
      });

    // 완료
    axios
      .post("/api/cart?type=modify", {
        cart_id: CART_ID,
        complete_yn: "Y",
        product_id: "",
        user_id: userId,
      })
      .then((response) => {
        alert("결제 되었습니다.");
      });
  };

  return (
    <div>
      <h2>장바구니</h2>
      <ListGroup style={{ marginBottom: 30 + "px" }}>
        {cartList &&
          cartList.map((item) => {
            return (
              <ListGroupItem key={item.product_id}>
                <img src={item.image} alt="product" />
                {item.title}
              </ListGroupItem>
            );
          })}
      </ListGroup>
      <div style={({ marginBottom: 30 + "px" }, { textAlign: "center" })}>
        <h2>총 합계 {totalPrice}원</h2>
      </div>
      <PayInfo onPay={payProduct} />
    </div>
  );
};

export default Cart;
