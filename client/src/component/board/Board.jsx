import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BoardItem from "./BoardItem";
import Button from "../button/Button";
import styled from "styled-components";

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
    <BoardTemplate>
      <BoardHeader>
        <Link to="/createBoard">
          <Button>작성</Button>
        </Link>
      </BoardHeader>
      <BoardListTitle>
        <Title>번호</Title>
        <Title>제목</Title>
        <Title>작성자</Title>
        <Title>조회수</Title>
      </BoardListTitle>
      <BoardList>
        {boardList.map((item) => {
          return <BoardItem key={item.id} item={item} onClick={onClick} />;
        })}
      </BoardList>
    </BoardTemplate>
  );
};

const BoardTemplate = styled.div`
  padding: 20px;
`;

const BoardHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0px;
  p {
    font-size: 16px;
  }
`;

const BoardListTitle = styled.div`
  display: flex;
  border-bottom: 1px solid #eaeaea;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  &:nth-child(1) {
    flex-grow: 0.5;
  }
  &:nth-child(2) {
    flex-grow: 5;
  }
  &:nth-child(3) {
    flex-grow: 1;
  }
  &:nth-child(4) {
    flex-grow: 0.5;
  }
`;

const BoardList = styled.ul`
  padding: 0;
`;

export default Board;
