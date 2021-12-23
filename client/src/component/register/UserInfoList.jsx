import React, { useState, useRef } from "react";
import UserInfo from "./UserInfo";
import axios from "axios";
import { Input, Button, FormGroup, Label } from "reactstrap";

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
        <FormGroup>
          <Label>조회할 회원 아이디</Label>
          <Input
            innerRef={emailRef}
            type="text"
            name="email"
            style={{ width: 320 + "px" }}
          />
          <Button onClick={inquiryUser}>조회</Button>
        </FormGroup>
      </div>
      {userInfo && <UserInfo info={userInfo} />}
    </>
  );
};

export default EditUserInfo;
