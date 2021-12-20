import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardItem from "./BoardItem";
import { Link } from "react-router-dom";

const Board = () => {
  const [boardList, setBoardList] = useState([]);
  const [listCount, setListCount] = useState(0);
  const [boardPerPage, setBoardPerPage] = useState([]);

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

  // 게시판 조회수
  const onClick = (id) => {
    axios.post("/api/Board?type=upCount", { id }).then((response) => {
      try {
        console.log(response);
      } catch (e) {
        console.error("Error Encure: ", e);
      }
    });
  };

  // useEffect(() => {
  //   // 초기 페이지
  //   const start = 1;
  //   axios
  //     .post("/api/Board?type=page", {
  //       start: (Number(start) - 1) * 10,
  //       length: 10,
  //     })
  //     .then((response) => {
  //       console.log(response.data.json);
  //       setBoardPerPage(response.data.json);
  //     });
  // }, [setBoardPerPage]);

  return (
    <div>
      <h2>게시판</h2>
      <Link to="/createBoard">
        <button>글 작성</button>
      </Link>
      <h5>총 {listCount}개의 게시글</h5>
      <ul>
        {boardList.map((item) => {
          return <BoardItem key={item.id} item={item} onClick={onClick} />;
        })}
      </ul>
    </div>
  );
};

export default Board;
