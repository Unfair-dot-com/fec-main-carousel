import React from 'react';
import styled from 'styled-components';

const StyledZoom = styled.div`
  width: 45vw;
  height: 45vw;
  background-color: #7f187f;
  position: absolute;
  left: 48vw;
  z-index: 5;
  display: ${(props) => (props.displayZoom === true ? 'block' : 'none')}
`;

const Zoom = (props) => (
  <StyledZoom displayZoom={props.displayZoom}>
    Hello!
  </StyledZoom>
);

export default Zoom;
