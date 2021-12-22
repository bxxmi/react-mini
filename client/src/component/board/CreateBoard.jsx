import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const CreateBoard = () => {
  const formRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!titleRef.current.value) {
      alert("제목을 입력해주세요");
      titleRef.current.focus();
    } else if (!userRef.current.value) {
      alert("작성자를 입력해주세요");
      userRef.current.focus();
    } else if (!contentRef.current.value) {
      alert("내용을 입력해주세요");
      contentRef.current.focus();
    } else if (!passwordRef.current.value) {
      alert("비밀번호를 입력해주세요");
      passwordRef.current.focus();
    }

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
          alert("게시글이 성공적으로 작성됐습니다.");
          history.goBack();
        } catch (e) {
          console.error("Error Encure: ", e);
        }
      });
  };

  return (
    <Container>
      <Form innerRef={formRef}>
        <FormGroup>
          <Label>제목</Label>
          <Input innerRef={titleRef} type="text" name="title" maxLength="50" />
        </FormGroup>
        <FormGroup>
          <Label>작성자</Label>
          <Input innerRef={userRef} type="text" name="writer" />
        </FormGroup>
        <FormGroup>
          <Label>내용</Label>
          <Input innerRef={contentRef} type="textarea" name="content" />
        </FormGroup>
        <FormGroup>
          <Label>게시글 비밀번호</Label>
          <Input
            innerRef={passwordRef}
            type="password"
            placeholder="작성 비밀번호"
            maxLength="10"
          />
        </FormGroup>
        <Button type="submit" onClick={onSubmit}>
          생성
        </Button>
      </Form>
    </Container>
  );
};

export default CreateBoard;
