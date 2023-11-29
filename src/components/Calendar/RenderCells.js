import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const RenderCells = ({ currentDate, selectedDate, onDateClick }) => {
  // { currentDate, selectedDate, onDateClick }
  const navigate = useNavigate();
  // let currentDate = 20231130;
  // let selectedDate = 20231130;
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  const handleDate = (day) => {
    navigate(`../diary/${format(day, 'yyyyMMdd')}`);

  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
      days.push(
        <DayWrapper
          className={`col cell ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'cell_selected'
              : format(currentDate, 'M') !== format(day, 'M')
              ? 'not_valid_border'
              : 'cell_valid'
          }`}
          key={day}
          onClick={() => handleDate(cloneDay)}
        >
          <Day
            className={
              format(currentDate, 'M') !== format(day, 'M') ? 'not_valid' : ''
            }
          >
            {formattedDate}
          </Day>
        </DayWrapper>
      );
      day = addDays(day, 1);
    }
    rows.push(<Row key={day}>{days}</Row>);
    days = [];
  }
  return <Cells>{rows}</Cells>;
};

export default RenderCells;

const Cells = styled.div`
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const DayWrapper = styled.div`
  border: 1.5px solid rgba(170, 91, 66, 0.2);
  border-radius: 5px;
  /* width: 4rem; */
  /* height: 6.1rem; */
  width: 100%;
  margin-right: 0.5rem;
  margin-top: 1rem;
  position: relative;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const Day = styled.div`
  margin-left: 0.6rem;
  margin-top: 0.3rem;
  font-size: 1rem;
  /* height: 110px; */
`;
