import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 50%;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 lem;
  padding: 0.25em 1em;
  ${props => props.primary
    && css`
    background: palevioletred;
    color: white;
  `};
`;

export default Button;
