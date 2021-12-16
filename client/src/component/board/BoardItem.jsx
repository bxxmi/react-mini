import React from "react";

const BoardItem = ({ item }) => {
  const { title, view_count, insert_date, insert_user } = item;
  return (
    <li>
      {title} / {insert_date} / {insert_user} / {view_count}
    </li>
  );
};

export default BoardItem;
