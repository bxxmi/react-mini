import React, { useRef } from "react";
import axios from "axios";

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
        console.log(response);
      });
  };

  return (
    <form>
      <input
        ref={emailRef}
        type="text"
        name="email"
        defaultValue={user_email}
      />
      <input ref={nameRef} type="text" name="name" defaultValue={user_name} />
      <input
        ref={passwordRef}
        type="password"
        name="password"
        defaultValue={user_password}
      />
      <button onClick={editPassword}>비밀번호 변경</button>
      <input
        ref={phoneRef}
        type="text"
        name="user_phone"
        defaultValue={user_phone}
      />
      <input
        ref={majorRef}
        type="text"
        name="major"
        defaultValue={user_major}
      />
      <input ref={jobRef} type="text" name="job" defaultValue={user_org} />
      <button onClick={onSubmit}>수정</button>
    </form>
  );
};

export default UserInfo;
