/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Button from './Button';

// inherits grid properties and max-width from Grid component
const StyledUpperCarousel = styled(Grid)`
  max-height: 500px;
`;

const StyledImage = styled.img`
  max-height: 500px;
  grid-area: 1 / 1 / 2 / 4;
  z-index: 0;
`;

const LeftStyledButton = styled(Button)`
  grid-area: 1 / 1 / 2 / 2;
  z-index: 1;
`;

const RightStyledButton = styled(Button)`
  grid-area: 1 / 3 / 2 / 4;
  z-index: 2;
`;

class UpperCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    // sets a default value for the url, since state data
    // isn't available when the page first renders
    const {
      handleButtonClick, images, numberOfImages, activeThumbnail,
    } = this.props;
    const imageURL = images.length > 0
      ? images[2].fullSizeURL : undefined;

    return (
      <StyledUpperCarousel className="product-image">
        <LeftStyledButton
          className="left-button"
          onClick={handleButtonClick}
          number={numberOfImages}
          activeThumbnail={activeThumbnail}
        >
          &lt;
        </LeftStyledButton>

        <StyledImage alt="Click to Zoom" src={imageURL} />

        <RightStyledButton
          className="right-button"
          onClick={handleButtonClick}
          number={numberOfImages}
          activeThumbnail={activeThumbnail}
        >
          &gt;
        </RightStyledButton>
      </StyledUpperCarousel>
    );
  }
}

export default UpperCarousel;
