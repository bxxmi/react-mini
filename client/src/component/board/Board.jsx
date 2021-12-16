import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardItem from "./BoardItem";

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
      <ul>
        {boardList.map((item) => {
          return <BoardItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Board;
