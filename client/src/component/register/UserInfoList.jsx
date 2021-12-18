import React, { useState, useRef } from "react";
import UserInfo from "./UserInfo";
import axios from "axios";

const EditUserInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  const emailRef = useRef();

  const inquiryUser = () => {
    axios
      .post("/api/user?type=selectUser", {
        user_email: emailRef.current.value,
      })
      .then((response) => {
        const result = response.data.json[0];
        setUserInfo(result);
      });
  };

  return (
    <>
      <div>
        <h3>회원 정보 조회</h3>
        <input ref={emailRef} type="text" name="email" />
        <button onClick={inquiryUser}>조회</button>
      </div>
      {userInfo && <UserInfo info={userInfo} />}
    </>
  );
};

export default EditUserInfo;
