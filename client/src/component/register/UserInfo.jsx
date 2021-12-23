import React, { useRef } from "react";
import axios from "axios";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

const UserInfo = ({ info }) => {
  const {
    user_email,
    user_name,
    user_major,
    user_org,
    user_password,
    user_phone,
  } = info;

  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const majorRef = useRef();
  const jobRef = useRef();

  const editPassword = (e) => {
    e.preventDefault();

    axios
      .post("/api/user?type=pwd", {
        user_email: emailRef.current.value,
        user_password: passwordRef.current.value,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/user?type=updateUser", {
        user_email: emailRef.current.value,
        user_name: nameRef.current.value,
        user_org: jobRef.current.value,
        user_password: passwordRef.current.value,
        user_confirm: "Y",
        user_major: majorRef.current.value,
        user_phone: phoneRef.current.value,
      })
      .then((response) => {
        alert("수정이 완료되었습니다.");
      });
  };

  return (
    <Form>
      <FormGroup>
        <Label>이메일</Label>
        <Input
          innerRef={emailRef}
          type="text"
          name="email"
          defaultValue={user_email}
        />
      </FormGroup>
      <FormGroup>
        <Label>유저명</Label>
        <Input
          innerRef={nameRef}
          type="text"
          name="name"
          defaultValue={user_name}
        />
      </FormGroup>
      <FormGroup>
        <Label>비밀번호</Label>
        <Input
          innerRef={passwordRef}
          type="password"
          name="password"
          defaultValue={user_password}
        />
        <Button onClick={editPassword}>비밀번호 변경</Button>
      </FormGroup>
      <FormGroup>
        <Label>핸드폰 번호</Label>
        <Input
          innerRef={phoneRef}
          type="text"
          name="user_phone"
          defaultValue={user_phone}
        />
      </FormGroup>
      <FormGroup>
        <Label>전공</Label>
        <Input
          innerRef={majorRef}
          type="text"
          name="major"
          defaultValue={user_major}
        />
      </FormGroup>
      <FormGroup>
        <Label>직업</Label>
        <Input
          innerRef={jobRef}
          type="text"
          name="job"
          defaultValue={user_org}
        />
      </FormGroup>
      <Button onClick={onSubmit}>수정</Button>
    </Form>
  );
};

export default UserInfo;
