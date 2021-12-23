import React, { useRef } from "react";
import { FormGroup, Form, Input, Label, Col, Row, Button } from "reactstrap";

const DeliveryInfo = ({ onPay }) => {
  const recieverRef = useRef();
  const phone1Ref = useRef();
  const phone2Ref = useRef();
  const phone3Ref = useRef();
  const addressRef = useRef();
  const detailAddress1Ref = useRef();
  const detailAddress2Ref = useRef();
  const cardRef = useRef();
  const cardOwnerRef = useRef();
  const cardNum1Ref = useRef();
  const cardNum2Ref = useRef();
  const cardNum3Ref = useRef();
  const cardNum4Ref = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const onPayHandler = (e) => {
    e.preventDefault();

    const payInfo = {
      receive_user: recieverRef.current.value,
      receive_user_tel1: phone1Ref.current.value,
      receive_user_tel2: phone2Ref.current.value,
      receive_user_tel3: phone3Ref.current.value,
      receive_address1: addressRef.current.value,
      receive_address2: detailAddress1Ref.current.value,
      receive_address3: detailAddress2Ref.current.value,
      cart_dv: cardRef.current.value,
      card_user: cardOwnerRef.current.value,
      card_number1: cardNum1Ref.current.value,
      card_number2: cardNum2Ref.current.value,
      card_number3: cardNum3Ref.current.value,
      card_number4: cardNum4Ref.current.value,
      card_month: monthRef.current.value,
      card_year: yearRef.current.value,
    };

    onPay(payInfo);
  };

  return (
    <FormGroup>
      <h2>수취인 정보</h2>
      <Form>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label>수취인 명 * </Label>
              <Input innerRef={recieverRef} type="text" name="recieve_user" />
            </FormGroup>
          </Col>
          <Row style={({ display: "flex" }, { flexDirection: "column" })}>
            <Label sm={3}>핸드폰 번호 * </Label>
            <Col sm={3} style={{ display: "flex" }}>
              <FormGroup style={{ marginRight: 10 + "px" }}>
                <Input innerRef={recieverRef} type="text" name="recieve_user" />
              </FormGroup>
              <FormGroup style={{ marginRight: 10 + "px" }}>
                <Input innerRef={recieverRef} type="text" name="recieve_user" />
              </FormGroup>
              <FormGroup>
                <Input innerRef={recieverRef} type="text" name="recieve_user" />
              </FormGroup>
            </Col>
          </Row>
          <Row style={({ display: "flex" }, { flexDirection: "column" })}>
            <Label md={3}>배송지 * </Label>
            <Col md={4}>
              <FormGroup>
                <Input
                  innerRef={addressRef}
                  type="text"
                  name="address"
                  placeholder="시/도"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  innerRef={detailAddress1Ref}
                  type="text"
                  name="detail_address1"
                  placeholder="상세주소1"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  innerRef={detailAddress2Ref}
                  type="text"
                  name="detail_address2"
                  placeholder="상세주소2"
                />
              </FormGroup>
            </Col>
          </Row>
          <h2>결제 정보</h2>
          <FormGroup>
            <Label>카드 선택 *</Label>
            <Input
              innerRef={cardRef}
              type="text"
              name="card"
              placeholder="ex) 카카오뱅크, 국민은행, ..."
            />
          </FormGroup>
          <FormGroup>
            <Label>카드 소유자 *</Label>
            <Input innerRef={cardOwnerRef} type="text" name="card_owner" />
          </FormGroup>
          <FormGroup>
            <Label>카드 번호 *</Label>
            <Input innerRef={cardNum1Ref} type="text" name="card_num1" />
            <Input innerRef={cardNum2Ref} type="text" name="card_num2" />
            <Input innerRef={cardNum3Ref} type="text" name="card_num3" />
            <Input innerRef={cardNum4Ref} type="password" name="card_num4" />
          </FormGroup>
          <FormGroup>
            <Label>카드 유효기간 *</Label>
            <Input
              innerRef={monthRef}
              type="text"
              name="month"
              placeholder="month"
            />
            <Input
              innerRef={yearRef}
              type="text"
              name="year"
              placeholder="year"
            />
          </FormGroup>
          <Button onClick={onPayHandler}>결제</Button>
        </Row>
      </Form>
    </FormGroup>
  );
};

export default DeliveryInfo;
