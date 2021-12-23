import React, { useEffect, useState } from "react";
import axios from "axios";
import HistoryList from "./HistoryList";
import { ListGroup } from "reactstrap";

const History = ({ userId }) => {
  const [payHistory, setPayHistory] = useState([]);
  const [detailHistory, setDetailHistory] = useState([]);

  useEffect(() => {
    axios
      .post("/api/order?type=list", {
        user_id: userId,
        start_date: "",
        end_date: "",
      })
      .then((response) => {
        const result = response.data.json;
        setPayHistory(result);
      });
  }, [setPayHistory]);

  // const showDetailPay = (id) => {
  //   axios
  //     .post("/api/order?type=orderDetail", {
  //       user_id: userId,
  //       order_id: id,
  //     })
  //     .then((response) => {
  //       const result = response.data.json;
  //       setDetailHistory(result);
  //     });
  // };

  return (
    <div>
      <h2>사용자 구매내역</h2>
      <ListGroup>
        {payHistory &&
          payHistory.map((history) => {
            return <HistoryList key={history.order_id} history={history} />;
          })}
      </ListGroup>
    </div>
  );
};

export default History;
