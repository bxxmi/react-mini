import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardItem from "./BoardItem";
import { Link } from "react-router-dom";

const Board = () => {
  const [boardList, setBoardList] = useState([]);

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

  return (
    <div>
      <h2>게시판</h2>
      <Link to="/createBoard">
        <button>글 작성</button>
      </Link>
      <ul>
        {boardList.map((item) => {
          return <BoardItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Board;
