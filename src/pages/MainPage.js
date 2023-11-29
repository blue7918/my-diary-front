import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import RenderDays from '../components/Calendar/RenderDays';
import { addMonths, subMonths } from 'date-fns';
import RenderCells from '../components/Calendar/RenderCells';
import RenderMonthHeader from '../components/Calendar/RenderMonthHeader';
import '../style/globals.css';
import '../style/style.css';

const MainPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); //cleanup
    };
  }, []);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [prevMonth, setPrevMonth] = useState(subMonths(currentDate, 1));

  const prevArrow = () => {
    setCurrentDate(subMonths(currentDate, 1));
    setPrevMonth(subMonths(prevMonth, 1));
  };
  const nextArrow = () => {
    setCurrentDate(addMonths(currentDate, 1));
    setPrevMonth(addMonths(prevMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  if (windowWidth < 1000) {
    return (
      <BackGround>
        <Wrapper>
          <LeftArrow src="/images/arrow.png" onClick={prevArrow} />
          <MonthWrapper>
            <RenderMonthHeader currentDate={currentDate} />
            <RenderDays />
            <RenderCells
              currentDate={currentDate}
              selectedDate={selectedDate}
              onDateClick={onDateClick}
            />
          </MonthWrapper>
          <NextArrow className="set_center">
            <div>
              <LeftArrow src="/images/arrow.png" onClick={nextArrow} />
            </div>
          </NextArrow>
        </Wrapper>
      </BackGround>
    );
  } else {
    return (
      <BackGround>
        <Wrapper>
          <ArrowWrapper onClick={prevArrow}>
            <LeftArrow src="/images/arrow.png" />
          </ArrowWrapper>
          <MonthWrapper>
            <RenderMonthHeader currentDate={prevMonth} />
            <RenderDays />
            <RenderCells
              currentDate={prevMonth}
              selectedDate={selectedDate}
              onDateClick={onDateClick}
            />
          </MonthWrapper>
          <MonthWrapper>
            <RenderMonthHeader currentDate={currentDate} />
            <RenderDays />
            <RenderCells
              currentDate={currentDate}
              selectedDate={selectedDate}
              onDateClick={onDateClick}
            />
          </MonthWrapper>
          <ArrowWrapper onClick={nextArrow}>
            <NextArrow>
              <div>
                <LeftArrow src="/images/arrow.png" />
              </div>
            </NextArrow>
          </ArrowWrapper>
        </Wrapper>
      </BackGround>
    );
  }
};

const BackGround = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const ArrowWrapper = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
const LeftArrow = styled.img`
  width: 30px;
  height: 45px;
  margin: 20px;
  filter: opacity(0.3) drop-shadow(0 0 0 #ff0000);
`;
const NextArrow = styled.div`
  & > div {
    transform: rotate(180deg);
  }
`;
const Wrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 100%;
  height: fit-content;
`;

const MonthWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 20px;
  border: 1.5px solid rgb(104, 104, 104, 0.2);
  padding: 1rem;
  min-width: 700px;
`;
export default MainPage;
