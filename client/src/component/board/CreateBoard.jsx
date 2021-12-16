import React, { useState } from "react";
import axios from "axios";

const CreateBoard = () => {
  const [board, setBoard] = useState({});

  const onSubmit = () => {
    console.log("submit");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submithandler");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" placeholder="제목" />
      <input type="text" name="content" placeholder="내용" />
      <input type="password" placeholder="작성 비밀번호" />
      <input type="text" placeholder="등록자" />
      <input type="text" placeholder="등록일자" />
      <button type="submit" onClick={onSubmitHandler}>
        생성
      </button>
    </form>
  );
};

export default CreateBoard;
