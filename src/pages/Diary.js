import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import AlertModal from '../components/Diary/AlertModal';

const DiaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgFile, setImgFile] = useState('');

  const saveImgFile = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e) => {
      setImgFile(e?.target?.result);
    };
  };

  return (
    <BackGround>
      <Wrapper>
        <BackIcon src="/images/arrow.png" onClick={() => setIsOpen(true)} />
        <Save>저장하기</Save>
        <Date>
          <div>2023년</div>
          <div>11월</div>
          <div>29일의 기록</div>
        </Date>
        <Title>
          <div>제목: </div>
          <input></input>
          <TitleLine src="/images/line.png" />
        </Title>
        <Feeling>
          <div>오늘의 기분: </div>
          <input></input>
          <FeelingLine src="/images/line.png" />
        </Feeling>
        <PhotoWrapper>
          <PhotoLabel htmlFor="profileImg">
            {imgFile ? (
              <Photo src={imgFile} />
            ) : (
              <AddIcon src="/images/addPhoto.png"></AddIcon>
            )}
          </PhotoLabel>
          <PhotoInput
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={(e) => saveImgFile(e)}
          />
        </PhotoWrapper>
        <Diary>
          <DiaryText maxLength="328"></DiaryText>
          <LineWrapper>
            <DiaryLine src="/images/line.png" />
            <DiaryLine src="/images/line.png" />
            <DiaryLine src="/images/line.png" />
            <DiaryLine src="/images/line.png" />
            <DiaryLine src="/images/line.png" />
            <DiaryLine src="/images/line.png" />
            <DiaryLine src="/images/line.png" />
          </LineWrapper>
        </Diary>
      </Wrapper>
      {isOpen ? <AlertModal setIsOpen={setIsOpen} /> : <></>}
    </BackGround>
  );
};
export default DiaryPage;

const BackGround = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: rgba(235, 207, 198, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 90%;
  min-height: 950px;
  width: 750px;
  background-color: #fffdfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  font-size: 25px;
  gap: 15px;
  position: relative;
`;

const BackIcon = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 40px;
  top: 45px;
  filter: opacity(0.3) drop-shadow(0 0 0 #ff0000);
`;
const Save = styled.button`
  background-color: rgba(235, 207, 198, 0.8);
  width: 100px;
  height: 40px;
  border-radius: 10px;
  position: absolute;
  right: 40px;
  top: 40px;
  font-size: 20px;
`;
const Date = styled.div`
  width: fit-content;
  font-size: 30px;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  position: relative;
  & > input {
    width: 88%;
    padding: 0px 10px;
    font-size: 18.7px;
    border: none;
  }
`;
const TitleLine = styled.img`
  width: 90%;
  height: 10px;
  position: absolute;
  bottom: -3px;
  right: 10px;
`;

const Feeling = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  position: relative;
  & > input {
    width: 79%;
    padding: 0px 10px;
    font-size: 18.7px;
    border: none;
  }
`;
const FeelingLine = styled.img`
  width: 81%;
  height: 10px;
  position: absolute;
  bottom: -3px;
  right: 10px;
`;

const PhotoWrapper = styled.div`
  background-color: rgba(235, 207, 198, 0.8);
  width: 100%;
  height: 350px;
  border-radius: 10px;
  margin-bottom: 20px;

  cursor: pointer;
`;
const PhotoLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PhotoInput = styled.input`
  display: none;
`;
const AddIcon = styled.img`
  width: 100px;
  height: 100px;
  filter: opacity(0.3) drop-shadow(0 0 0 #ff0000);
`;
const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* object-fit: contain; */
  object-fit: cover;
`;

const Diary = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
`;
const DiaryText = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 18.7px;
  line-height: 45px;
  resize: none;
  padding: 0 10px;
  z-index: 1;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  border: none;
`;
const LineWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const DiaryLine = styled.img`
  width: 100%;
  height: 10px;
  margin-top: 35px;
`;
