import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [category3, setCategory3] = useState([]);
  const [category4, setCategory4] = useState([]);
  const [productList, setProductList] = useState([]);

  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");

  const selectCategory1 = () => {
    axios.post("/api/product?type=category", { num: 1 }).then((response) => {
      const result = response.data.json;
      setCategory1(result);
    });
  };

  const changeCategory1 = (e) => {
    const category1 = e.target.value;
    axios
      .post("/api/product?type=category", { num: 2, category1 })
      .then((response) => {
        const result = response.data.json;
        setCategory2(result);
      });
    setSelected1(category1);
  };

  const changeCategory2 = (e) => {
    const category1 = selected1;
    const category2 = e.target.value;
    axios
      .post("/api/product?type=category", { num: 3, category1, category2 })
      .then((response) => {
        const result = response.data.json;
        setCategory3(result);
      });
    setSelected2(category2);
  };

  const changeCategory3 = (e) => {
    const category1 = selected1;
    const category2 = selected2;
    const category3 = e.target.value;
    console.log(category1, category2, category3);
    axios
      .post("/api/product?type=category", {
        num: 4,
        category1,
        category2,
        category3,
      })
      .then((response) => {
        const result = response.data.json;
        setCategory4(result);
      });
  };

  return (
    <div>
      <h2>상품</h2>
      <select onClick={selectCategory1} onChange={changeCategory1}>
        <option value="">category1</option>
        {category1 &&
          category1.map((list, index) => {
            return (
              <option key={index} value={list.category1}>
                {list.category1}
              </option>
            );
          })}
      </select>
      <select onChange={changeCategory2}>
        <option value="">category2</option>
        {category2 &&
          category2.map((list, index) => {
            return (
              <option key={index} value={list.category2}>
                {list.category2}
              </option>
            );
          })}
      </select>
      <select onChange={changeCategory3}>
        <option value="">category3</option>
        {category3 &&
          category3.map((list, index) => {
            return (
              <option key={index} value={list.category3}>
                {list.category3}
              </option>
            );
          })}
      </select>
      <select>
        <option value="">category4</option>
        {category4 &&
          category4.map((list, index) => {
            return (
              <option key={index} value={list.category4}>
                {list.category4}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Product;
