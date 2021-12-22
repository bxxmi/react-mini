import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

const EditBoard = ({ item, isOpen }) => {
  const { id, title, content, insert_user, write_password, view_count } = item;

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
        id,
        title: titleRef.current.value,
        content: contentRef.current.value,
        insert_user: userRef.current.value,
        view_count,
        write_password: passwordRef.current.value,
      })
      .then((response) => {
        try {
          alert("게시글 수정이 완료됐습니다.");
          history.goBack();
        } catch (e) {
          console.error("Error Encure: ", e);
        }
      });
  };

  return (
    <Modal centered fullscreen="md" size="lg" isOpen={isOpen}>
      <ModalHeader>게시글 수정</ModalHeader>
      <ModalBody>
        <Form ref={formRef}>
          <FormGroup>
            <Label>제목</Label>
            <Input
              innerRef={titleRef}
              type="text"
              name="title"
              defaultValue={title}
              maxLength="50"
            />
          </FormGroup>
          <FormGroup>
            <Label>작성자</Label>
            <Input
              innerRef={userRef}
              type="text"
              name="writer"
              defaultValue={insert_user}
            />
          </FormGroup>
          <FormGroup>
            <Label>내용</Label>
            <Input
              innerRef={contentRef}
              type="textarea"
              name="content"
              defaultValue={content}
            />
          </FormGroup>
          <FormGroup>
            <Label>게시글 비밀번호</Label>
            <Input
              innerRef={passwordRef}
              type="password"
              name="password"
              defaultValue={write_password}
              maxLength="10"
            />
          </FormGroup>
          <Button type="submit" onClick={onSubmit}>
            수정
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditBoard;
