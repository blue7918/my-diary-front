import React from 'react';
import styled from 'styled-components';

const RenderDays = () => {
  const daysList = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  return (
    <DateWrapper>
      {daysList.map((day, index) => (
        <Date key={index}>{day}</Date>
      ))}
    </DateWrapper>
  );
};

export default RenderDays;

const Date = styled.div`
  /* width: 5rem; */
  width: 14%;
  height: 0.6px;
  margin-right: 5px;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgb(235, 207, 198, 0.4);
  border-radius: 0.7rem;
`;
const DateWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  font-size: 0.76rem;
  padding: 1px;
  color: #686868;
`;
