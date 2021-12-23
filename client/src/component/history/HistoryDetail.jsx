import React, { useEffect } from "react";
import { List, ListInlineItem } from "reactstrap";

const HistoryDetail = ({ location }) => {
  const { order_id, insert_date, total_price, user_id } =
    location.state.history;

  return (
    <List>
      <ListInlineItem>
        <h4>주문번호 {order_id} 상세 내역</h4>
      </ListInlineItem>
      <p>주문날짜 {insert_date}</p>
      <p>주문자 {user_id}</p>
      <p>총 금액 {total_price}</p>
    </List>
  );
};

export default HistoryDetail;
