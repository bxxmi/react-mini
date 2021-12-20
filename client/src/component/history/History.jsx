import React, { useEffect, useState } from "react";
import axios from "axios";
import HistoryList from "./HistoryList";

const USER_ID = "onetest@onetest.com";

const History = () => {
  const [payHistory, setPayHistory] = useState([]);
  const [detailHistory, setDetailHistory] = useState([]);

  useEffect(() => {
    axios
      .post("/api/order?type=list", {
        user_id: USER_ID,
        start_date: "",
        end_date: "",
      })
      .then((response) => {
        const result = response.data.json;
        setPayHistory(result);
      });
  }, [setPayHistory]);

  const showDetailPay = (id) => {
    console.log(id);
    // axios
    //   .post("/api/order?type=orderDetail", {
    //     user_id: USER_ID,
    //     order_id: id,
    //   })
    //   .then((response) => {
    //     const result = response.data.json;
    //     console.log(result);
    //     setDetailHistory(result);
    //   });
  };

  return (
    <div>
      <h2>사용자 구매내역</h2>
      <ul>
        {payHistory &&
          payHistory.map((history) => {
            return (
              <HistoryList
                key={history.order_id}
                history={history}
                onShowDetail={showDetailPay}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default History;
