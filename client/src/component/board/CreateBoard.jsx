import React, { useRef, useState } from "react";
import axios from "axios";

const CreateBoard = () => {
  const [boardItem, setBoardItem] = useState({});

  const formRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();

  const createBoard = (board) => {
    console.log(board);
    axios.post("/api/Board?type=save", { board }).then((response) => {
      console.log(response);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const board = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      id: Date.now(),
      insert_user: userRef.current.value,
      view_count: 0,
      write_password: passwordRef.current.value,
    };

    createBoard(board);
  };

  return (
    <form ref={formRef}>
      <input ref={titleRef} type="text" name="title" placeholder="제목" />
      <input ref={contentRef} type="text" name="content" placeholder="내용" />
      <input ref={passwordRef} type="password" placeholder="작성 비밀번호" />
      <input ref={userRef} type="text" placeholder="등록자" />
      <button type="submit" onClick={onSubmit}>
        생성
      </button>
    </form>
  );
};

export default CreateBoard;
