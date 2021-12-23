import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import cookie from "react-cookies";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onLogin = () => {
    if (!(userEmail && userPassword)) {
      sweetalert("이메일과 비밀번호를 확인해주세요", "", "info", "닫기");
    }

    axios
      .post("/api/user?type=login", {
        user_email: userEmail,
        user_password: userPassword,
      })
      .then((response) => {
        if (response.data[0]) {
          const user_email = response.data[0].user_email;
          const user_name = response.data[0].user_name;
          const user_pwd = response.data[0].user_password;

          if (user_email) {
            sweetalert("로그인 되었습니다", "", "info", "닫기");
            // 로그인 토큰 정보 입력
            const expires = new Date();
            // setMinutes: '분' 설정
            // 토큰 유효 시간을 현재 시간 + 60분 설정
            expires.setMinutes(expires.getMinutes() + 60);

            // JWT 토큰 발행
            axios
              .post("/api/user?type=webtoken", {
                user_email,
                user_name,
              })
              .then((response) => {
                // 쿠키에 토큰 저장
                // 저장될 이름, 토큰 값, 설정 값 지정 ex) 쿠키를 사용할 path 설정 등
                cookie.save("token_id", response.data.token_id, {
                  // 모든 url에 토큰 적용
                  path: "/",
                  // 위에서 지정한 유효 시간
                  expires,
                });
                cookie.save("token_name", response.data.token_name, {
                  path: "/",
                  expires,
                });
                // 비밀번호는 비권장 방법
                cookie.save("user_password", user_pwd, {
                  path: "/",
                  expires,
                });
              })
              .catch((e) => {
                sweetalert("작업 중 오류가 발생했습니다", e, "error", "닫기");
              });
            setTimeout(() => {
              history.push("/naverApi");
            }, 1000);
          }
        } else {
          sweetalert(
            "아이디 또는 비밀번호가 일치하지 않습니다",
            "",
            "error",
            "닫기"
          );
        }
      });
  };

  const sweetalert = (title, showConfirmButton, icon) => {
    Swal.fire({
      position: "center",
      icon,
      title,
      showConfirmButton,
      timer: 1000,
    });
  };

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
            <Input
              type="text"
              name="email"
              placeholder="email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
            <Label>비밀번호</Label>
            <Input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
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
        <Button onClick={onLogin}>로그인</Button>
      </Form>
    </div>
  );
};

export default Login;
