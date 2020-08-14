import React from 'react';
import styled, { css } from 'styled-components';

// border prop compares activeIndex & id to see
// whether it should have a purple border
const Thumbnail = styled.img`
  border: ${props => (props.activeIndex === props.id
    ? '2px solid #7f187f'
    : '2px solid white')};
  border-radius:10px;
  margin: auto;
`;

export default Thumbnail;
