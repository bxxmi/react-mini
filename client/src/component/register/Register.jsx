import React, { useState, useRef } from "react";
import axios from "axios";

const Register = () => {
  const [newUser, setNewUser] = useState({});

  const formRef = useRef();
  const emailRef_1 = useRef();
  const emailRef_2 = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const majorRef = useRef();
  const jobRef = useRef();

  // 이메일 중복 체크
  const dupleCheck = (e) => {
    e.preventDefault();

    const email1 = emailRef_1.current.value;
    const email2 = emailRef_2.current.value;
    axios
      .post("/api/user?type=dplicheck", {
        user_email1: email1,
        user_email2: email2,
      })
      .then((response) => {
        const result = response.data.json[0].dupliEmailCount;
        if (result > 0) alert("이미 존재하는 이메일입니다.");
        else alert("사용 가능한 이메일입니다.");
      });
  };

  // 회원가입
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/user?type=signup", {
        user_name: nameRef.current.value,
        user_email1: emailRef_1.current.value,
        user_email2: emailRef_2.current.value,
        user_org: jobRef.current.value,
        user_password: passwordRef.current.value,
        user_major: majorRef.current.value,
        user_phone: phoneRef.current.value,
        user_confirm: "Y",
        reg_user: emailRef_1.current.value + "@" + emailRef_2.current.value,
        reg_date: null,
        update_user: null,
        update_date: null,
        update_password_date: null,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form ref={formRef}>
        <input ref={nameRef} type="text" name="name" placeholder="등록자" />
        <input
          ref={emailRef_1}
          type="text"
          name="email1"
          placeholder="이메일1"
        />
        <input
          ref={emailRef_2}
          type="text"
          name="email2"
          placeholder="이메일2"
        />
        <button type="submit" onClick={dupleCheck}>
          중복 검사
        </button>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="비밀번호"
        />
        <input ref={phoneRef} type="text" name="phone" placeholder="전화번호" />
        <input ref={majorRef} type="text" name="major" placeholder="전공" />
        <input ref={jobRef} type="text" name="job" placeholder="직업" />
        <button type="submit" onClick={onSubmit}>
          가입
        </button>
      </form>
    </div>
  );
};

export default Register;
