import React, { useState } from "react";
import EditBoard from "./EditBoard";
import { Button } from "reactstrap";
import styled from "styled-components";

const BoardDetail = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, content, insert_user, view_count } = location.state.item;

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BoardDetailTemplate>
        <BoardTitle>
          <h3>{title}</h3>
          <BoardSubTitle>
            <h6>{insert_user}</h6>
            <h6>조회수 {view_count}</h6>
          </BoardSubTitle>
        </BoardTitle>
        <BoardContent>{content}</BoardContent>
        <Button onClick={onClick}>글 수정</Button>
      </BoardDetailTemplate>
      {isOpen && <EditBoard item={location.state.item} isOpen={isOpen} />}
    </>
  );
};

const BoardDetailTemplate = styled.div`
  padding: 20px;
`;

const BoardTitle = styled.div`
  border-bottom: 1px solid #ed214c;
  margin-bottom: 20px;
`;

const BoardSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoardContent = styled.div`
  font-size: 18px;
  height: 400px;
  margin-bottom: 20px;
`;

export default BoardDetail;
