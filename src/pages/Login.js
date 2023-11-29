import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  //추후 아이디, 비밀번호 관련 추가 예정

  return (
    <Wrapper>
      <LoginBox>
        <IDBox>
          <div>ID</div>
          <input placeholder="아이디를 입력해주세요"></input>
        </IDBox>
        <PWBox>
          <div>PW</div>
          <input placeholder="비밀번호를 입력해주세요"></input>
        </PWBox>
        <Link to={'/calendar'}>
          <GoLogin>로그인 하기</GoLogin>
        </Link>
      </LoginBox>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: rgba(235, 207, 198, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  & > div {
    display: flex;
    align-items: center;
  }
  & > div > div {
    display: flex;
    align-items: center;
    width: 70px;
    font-size: 25px;
    color: #808080;
  }
  & > div > input {
    width: 330px;
    height: 60px;
    border-radius: 7px;
    outline: none;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    padding: 10px;
    font-size: 18px;
    &::placeholder {
      color: #c4c4c4;
    }
  }
`;
const IDBox = styled.div``;
const PWBox = styled.div``;
const GoLogin = styled.button`
  margin-top: 10px;
  background-color: #f3c5b6;
  width: 400px;
  height: 60px;
  border-radius: 7px;
  font-size: 26px;
  color: #fff;
  &:hover {
    background-color: #ce8a7e;
  }
`;
