import React from "react";

const BoardDetail = ({ location }) => {
  const {
    id,
    title,
    content,
    insert_user,
    insert_date,
    view_count,
    write_password,
  } = location.state.item;

  return (
    <div>
      <h3>게시글 {title} 의 상세 정보</h3>
      <p>
        {title} / {content} / {insert_user}
      </p>
    </div>
  );
};

export default BoardDetail;
