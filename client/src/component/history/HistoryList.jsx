import React from "react";
import { ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const HistoryList = ({ history }) => {
  return (
    <>
      <Link
        to={{
          pathname: `/historyDetail/${history.order_id}`,
          state: { history },
        }}
      >
        <ListGroupItem key={history.order_id}>{history.order_id}</ListGroupItem>
      </Link>
    </>
  );
};

export default HistoryList;
