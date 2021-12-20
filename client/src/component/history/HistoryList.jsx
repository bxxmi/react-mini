import React from "react";

const HistoryList = ({ history, onShowDetail }) => {
  const showDetailHandler = () => {
    onShowDetail(history.order_id);
  };
  return <li onClick={showDetailHandler}>{history.order_id}</li>;
};

export default HistoryList;
