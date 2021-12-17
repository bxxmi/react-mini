import React, { useState } from "react";
import EditBoard from "./EditBoard";

const BoardDetail = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    id,
    title,
    content,
    insert_user,
    insert_date,
    view_count,
    write_password,
  } = location.state.item;

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <EditBoard item={location.state.item} />}
      <h3>게시글 {title} 의 상세 정보</h3>
      <p>
        {title} / {content} / {insert_user}
      </p>
      <button onClick={onClick}>글 수정</button>
    </div>
  );
};

export default BoardDetail;
