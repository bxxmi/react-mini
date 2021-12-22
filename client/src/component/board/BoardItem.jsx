import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardItem = ({ item, onClick }) => {
  const { id, title, view_count, insert_user } = item;

  const numberId = id.slice(16, 19);

  const onClickHandler = () => {
    onClick(id);
  };

  return (
    <BoardItems onClick={onClickHandler}>
      <Item>{numberId}</Item>
      <Item>
        <Link to={{ pathname: `/board/${id}`, state: { item } }}>{title}</Link>
      </Item>
      <Item>{insert_user}</Item>
      <Item>{view_count}</Item>
    </BoardItems>
  );
};

const BoardItems = styled.li`
  display: flex;
  border-bottom: 1px solid #eaeaea;
  padding: 10px 0;
`;

const Item = styled.div`
  margin-left: 40px;
  &:nth-child(2) {
    width: 69%;
  }
  &:nth-child(3) {
    width: 13%;
  }
`;

export default BoardItem;
