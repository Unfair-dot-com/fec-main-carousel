import styled, { css } from 'styled-components';

const Button = styled.button`
  background: white;
  font-family: 'Poppins', arial, sans-serif;
  font-size: 125%;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(34,25,36,.2);
  border: 2px solid white;
  text-align: center;
  &:hover {
    border: 2px solid #7f187f;
    color: #7f187f;
  }
`;

export default Button;
