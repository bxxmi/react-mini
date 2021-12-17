import React from "react";
import { Link } from "react-router-dom";

const BoardItem = ({ item, onClick }) => {
  const { id, title, view_count, insert_date, insert_user } = item;

  const onClickHandler = () => {
    onClick(id);
  };

  return (
    <li onClick={onClickHandler}>
      <Link to={{ pathname: `/board/${id}`, state: { item } }}>
        {title} / {insert_date} / {insert_user} / {view_count}
      </Link>
    </li>
  );
};

export default BoardItem;
