import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardItem from "./BoardItem";
import { Link } from "react-router-dom";

const Board = () => {
  const [boardList, setBoardList] = useState([]);
  const [listCount, setListCount] = useState(0);

  // 게시판 목록 조회
  useEffect(() => {
    axios.post("/api/Board?type=list").then((response) => {
      try {
        const result = response.data.json;
        setBoardList(result);
      } catch (e) {
        console.error("Error Encure: ", e);
      }
    });
  }, [setBoardList]);

  // 게시판 총 갯수
  useEffect(() => {
    axios.post("/api/Board?type=count").then((response) => {
      try {
        const result = response.data.json[0].total_count;
        setListCount(result);
      } catch (e) {
        console.error("Error Encure: ", e);
      }
    });
  }, [setListCount]);

  return (
    <div>
      <h2>게시판</h2>
      <Link to="/createBoard">
        <button>글 작성</button>
      </Link>
      <h5>총 {listCount}개의 게시글</h5>
      <ul>
        {boardList.map((item) => {
          return <BoardItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Board;
