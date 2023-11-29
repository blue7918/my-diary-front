import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AlertModal = ({ setIsOpen }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/calendar', { replace: true });
  };

  return (
    <BackGround>
      <Wrapper>
        <TextWrapper>
          <div>저장하지 않고 '뒤돌아가기'를 누른다면</div>
          <div>오늘 적었던 일기는 사라집니다.</div>
          <div>달력으로 돌아가겠습니까?</div>
        </TextWrapper>
        <ButtonWrapper>
          <Cancel onClick={() => setIsOpen(false)}>취소</Cancel>
          <Confirm onClick={() => handleConfirm()}>확인</Confirm>
        </ButtonWrapper>
      </Wrapper>
    </BackGround>
  );
};

export default AlertModal;

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  background-color: #fff;
  border: 5px solid #000;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 25px;
  & > button {
    width: 135px;
    height: 50px;
    border-radius: 5px;
    font-size: 27px;
  }
`;
const Cancel = styled.button`
  background-color: #f3c5b6;
`;
const Confirm = styled.button`
  background-color: #ce8a7e;
`;
