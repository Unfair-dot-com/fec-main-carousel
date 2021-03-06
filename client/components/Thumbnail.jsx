import styled from 'styled-components';

// border compares activeIndex & id to see
// whether it should have a purple border
const Thumbnail = styled.img`
  border: ${(props) => (props.activeIndex === props.id
    ? '2px solid #7f187f'
    : '2px solid #fff')};
  border-radius:10px;
  margin: 5px;
  cursor: pointer;
`;

export default Thumbnail;
