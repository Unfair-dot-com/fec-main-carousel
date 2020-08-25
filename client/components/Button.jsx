import styled from 'styled-components';

// calculates whether or not to show the button
const isDisplayed = (props) => {
  const isLeftButton = props.className.indexOf('left') !== -1;
  const isRightButton = props.className.indexOf('right') !== -1;
  // hides the button when the first thumbnail is active
  if (props.activeThumbnail === 0 && isLeftButton) {
    // dont display the button
    return 'hidden';
  }
  // hides the button when the last thumbnail is active
  if (props.activeThumbnail === props.number - 1 && isRightButton) {
    return 'hidden';
  }
  return 'visible';
};

const Button = styled.button`
  background-color: #fff;
  font-family: 'Poppins', arial, sans-serif;
  font-size: 100%;
  text-align: center;
  width: 36px;
  height: 36px;
  margin: auto;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(34,25,36,.2);
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #7f187f;
    color: #7f187f;
    background-color: light-grey;
  }
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(.65, .05, .36, 1);
  transition-property: background-color, transform,color, border-color, margin;
  visibility: ${(props) => isDisplayed(props)};
  cursor: pointer;
`;

export default Button;
