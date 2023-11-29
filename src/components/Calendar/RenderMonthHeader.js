import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const RenderMonthHeader = ({ currentDate }) => {
  return (
    <HeaderWrapper>
      <Year>{format(currentDate, 'yyyy')}</Year>
      <Month>{format(currentDate, 'MM')}</Month>
      <div />
    </HeaderWrapper>
  );
};

export default RenderMonthHeader;

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Year = styled.div`
  color: #686868;
  font-size: 24px;
  font-weight: 600;
`;

const Month = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
