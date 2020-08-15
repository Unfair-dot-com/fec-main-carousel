import styled from 'styled-components';

// calculates whether or not to show the button
const isDisplayed = (props) => {
  const isLeftButton = props.className.indexOf('left') !== -1;
  const isRightButton = props.className.indexOf('right') !== -1;
  // hides the button when the first thumbnail is active
  if (props.activeThumbnail === 0 && isLeftButton) {
    // dont display the button
    return 'none';
  }
  // hides the button when the last thumbnail is active
  if (props.activeThumbnail === props.number - 1 && isRightButton) {
    return 'none';
  }
  return 'inline';
};

const Button = styled.button`
  background: white;
  font-family: 'Poppins', arial, sans-serif;
  font-size: 125%;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(34,25,36,.2);
  border: 2px solid white;
  &:hover {
    border: 2px solid #7f187f;
    color: #7f187f;
  }
  display: ${(props) => isDisplayed(props)}
`;

export default Button;
