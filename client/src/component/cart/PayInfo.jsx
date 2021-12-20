import React, { useRef } from "react";

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
    <div>
      <h2>결제 정보</h2>
      <form>
        <input
          ref={recieverRef}
          type="text"
          name="recieve_user"
          placeholder="수취인"
        />
        <input ref={phone1Ref} type="text" name="phone1" placeholder="phone" />
        <input ref={phone2Ref} type="text" name="phone2" placeholder="phone" />
        <input ref={phone3Ref} type="text" name="phone3" placeholder="phone" />
        <input ref={addressRef} type="text" name="address" placeholder="주소" />
        <input
          ref={detailAddress1Ref}
          type="text"
          name="detail_address1"
          placeholder="상세주소1"
        />
        <input
          ref={detailAddress2Ref}
          type="text"
          name="detail_address2"
          placeholder="상세주소2"
        />
        <h2>결제 정보</h2>
        <input ref={cardRef} type="text" name="card" placeholder="카드선택" />
        <input
          ref={cardOwnerRef}
          type="text"
          name="card_owner"
          placeholder="카드 소유자"
        />
        <input
          ref={cardNum1Ref}
          type="text"
          name="card_num1"
          placeholder="카드 번호"
        />
        <input
          ref={cardNum2Ref}
          type="text"
          name="card_num2"
          placeholder="카드 번호"
        />
        <input
          ref={cardNum3Ref}
          type="text"
          name="card_num3"
          placeholder="카드 번호"
        />
        <input
          ref={cardNum4Ref}
          type="password"
          name="card_num4"
          placeholder="카드 번호"
        />
        <input ref={monthRef} type="text" name="month" placeholder="month" />
        <input ref={yearRef} type="text" name="year" placeholder="year" />
        <button onClick={onPayHandler}>결제</button>
      </form>
    </div>
  );
};

export default DeliveryInfo;
