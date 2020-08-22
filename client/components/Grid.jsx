import styled from 'styled-components';

// helps center the grid container
const GridWrapper = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 48px auto 48px;
  grid-template-rows: 100%;
  max-width: 100%;
`;

export { GridWrapper, Grid };
