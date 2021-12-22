import React, { useRef } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
} from "reactstrap";

const Register = () => {
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
    <Container>
      <h2>회원가입</h2>
      <Form innerRef={formRef}>
        <FormGroup>
          <Label>이름</Label>
          <Input innerRef={nameRef} type="text" name="name" />
        </FormGroup>
        <Col md={4}>
          <FormGroup>
            <Label>이메일</Label>
            <Input
              innerRef={emailRef_1}
              type="text"
              name="email1"
              placeholder="이메일1"
            />
            @
            <Input
              innerRef={emailRef_2}
              type="text"
              name="email2"
              placeholder="이메일2"
            />
          </FormGroup>
        </Col>
        <Button type="submit" onClick={dupleCheck}>
          이메일 중복 검사
        </Button>
        <FormGroup>
          <Label>비밀번호</Label>
          <Input innerRef={passwordRef} type="password" name="password" />
        </FormGroup>
        <FormGroup>
          <Label>전화번호</Label>
          <Input innerRef={phoneRef} type="text" name="phone" />
        </FormGroup>
        <FormGroup>
          <Label>전공</Label>
          <Input innerRef={majorRef} type="text" name="major" />
        </FormGroup>
        <FormGroup>
          <Label>직업</Label>
          <Input innerRef={jobRef} type="text" name="job" />
        </FormGroup>
        <Button type="submit" onClick={onSubmit}>
          가입
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
