import React from "react";
import { Button, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        width: 500 + "px",
        border: "1px solid #eaeaea",
        borderRadius: 10 + "px",
        margin: "0 auto",
        padding: 30 + "px",
      }}
    >
      <h2>로그인</h2>
      <Form>
        <Row>
          <FormGroup>
            <Label>이메일</Label>
            <Input type="text" name="email" placeholder="email" />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
            <Label>비밀번호</Label>
            <Input type="password" name="password" placeholder="password" />
          </FormGroup>
        </Row>
        <Link to={{ pathname: "/register" }}>
          <p style={{ fontSize: 13 + "px", marginRight: 100 + "px" }}>
            회원가입
          </p>
        </Link>
        <Link to={{ pathname: "/userInfo" }}>
          <p style={{ fontSize: 13 + "px" }}>회원 정보 조회</p>
        </Link>
        <Button>로그인</Button>
      </Form>
    </div>
  );
};

export default Login;
