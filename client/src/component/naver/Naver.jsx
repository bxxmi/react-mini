import axios from "axios";
import React, { useEffect, useState } from "react";

const Naver = () => {
  const [keyword, setKeyword] = useState("");
  const [keywordResult, setKeywordResult] = useState([]);
  const [product, setProduct] = useState({});

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
        console.log(result);
        setKeywordResult(result);
      });
  };

  useEffect(() => {
    keywordHandler(keyword);
  }, [keyword]);

  const onSearch = () => {
    console.log("search!");
  };

  return (
    <div>
      <h2>최저가 상품 조회 및 등록 하기</h2>
      <input
        type="text"
        name="search"
        placeholder="search product"
        onChange={inputKeyword}
        onKeyPress={(e) => {
          if (e.key === "Enter") onSearch();
        }}
      />
      <ul>
        {keywordResult &&
          keywordResult.map((result) => {
            return <li>{result}</li>;
          })}
      </ul>
    </div>
  );
};

export default Naver;
