import axios from "axios";
import React, { useRef, useState } from "react";
import NaverProduct from "./NaverProduct";
import { Input, Label, ListGroup, ListGroupItem } from "reactstrap";

const Naver = () => {
  const [keyword, setKeyword] = useState("");
  const [keywordResult, setKeywordResult] = useState([]);
  const [product, setProduct] = useState({});

  const inputRef = useRef();

  const inputKeyword = (e) => {
    const text = e.target.value;
    setKeyword(text);
    keywordHandler(keyword);
  };

  const keywordHandler = (text) => {
    axios
      .post("/api/naverApi?type=search", { query: text })
      .then((response) => {
        const result = response.data.items[0];
        setKeywordResult(result);
      });
  };

  const onSearch = () => {
    axios
      .post("/api/naverApi?type=shopList", { query: keyword })
      .then((response) => {
        const result = response.data.items;
        setProduct(result);
      });

    setKeywordResult([]);
  };

  const changeText = (e) => {
    const text = e.target.innerText.replace("0", "");
    inputRef.current.value = text;
    setKeyword(text);
  };

  return (
    <>
      <div>
        <Label>
          <h5>최저가 상품 검색 및 등록</h5>
        </Label>
        <Input
          innerRef={inputRef}
          type="text"
          name="search"
          onChange={inputKeyword}
          placeholder="키워드를 입력하세요"
          onKeyPress={(e) => {
            if (e.key === "Enter") onSearch();
          }}
        />
        <ListGroup>
          {keywordResult &&
            keywordResult.map((result, index) => {
              const pureString = result.slice(0, 1);
              return (
                <ListGroupItem key={index} onClick={changeText}>
                  {pureString}
                </ListGroupItem>
              );
            })}
        </ListGroup>
      </div>
      <ListGroup>
        {product &&
          Object.values(product).map((items) => {
            return <NaverProduct items={items} />;
          })}
      </ListGroup>
    </>
  );
};

export default Naver;
