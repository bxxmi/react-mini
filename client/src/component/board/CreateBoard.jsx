import React, { useRef } from "react";
import axios from "axios";

const CreateBoard = () => {
  const formRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/Board?type=save", {
        id: null,
        title: titleRef.current.value,
        content: contentRef.current.value,
        insert_user: userRef.current.value,
        view_count: 0,
        write_password: passwordRef.current.value,
      })
      .then((response) => {
        try {
          console.log(response);
        } catch (e) {
          console.error("Error Encure: ", e);
        }
      });
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
