import React, { useRef } from "react";
import axios from "axios";

const EditBoard = ({ item }) => {
  const { id, title, content, insert_user, write_password } = item;

  const formRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/Board?type=save", {
        id,
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
    <div>
      <form ref={formRef}>
        <input ref={titleRef} type="text" name="title" defaultValue={title} />
        <input
          ref={contentRef}
          type="text"
          name="content"
          defaultValue={content}
        />
        <input
          ref={userRef}
          type="text"
          name="user"
          defaultValue={insert_user}
        />
        <input
          ref={passwordRef}
          type="text"
          name="password"
          defaultValue={write_password}
        />
        <button type="submit" onClick={onSubmit}>
          수정
        </button>
      </form>
    </div>
  );
};

export default EditBoard;
