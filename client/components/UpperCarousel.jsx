/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { GridWrapper, Grid } from './Grid';
import Button from './Button';

// inherits grid properties and max-width from Grid component
const GridContainer = styled(Grid)`
  max-height: 500px;
`;

// make this the carousel
const StyledImage = styled.img`
  max-height: 500px;
  grid-area: 1 / 1 / 2 / 4;
  z-index: 0;
`;

// left is dynamically generated based on current carousel position
const InnerCarousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  left: ${(props) => props.position}px;
  width: 100%;
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
      visibleThumbnail: 0,
      carouselPosition: 0
    };
    this.imageLoader = this.imageLoader.bind(this);
  }

  imageLoader() {
    const { images, activeThumbnail, handleThumbnailClick } = this.props;
    // checks to see if images have loaded yet
    if (images.length > 0) {
      // if so, constructs thumbnails in the carousel
      return images.map((image) => (
        <StyledImage
          alt=""
          id={image.index}
          src={image.fullSizeURL}
        />
      ));
    }
    return <div />;
  }

  render() {
    // sets a default value for the url, since state data
    // isn't available when the page first renders
    const {
      handleButtonClick, images, numberOfImages, activeThumbnail,
    } = this.props;
    const { carouselPosition } = this.state;

    const imageURL = images.length > 0
      ? images[2].fullSizeURL : undefined;

    return (
      <GridWrapper>
        <GridContainer className="product-image">
          <LeftStyledButton
            className="left-button"
            onClick={handleButtonClick}
            number={numberOfImages}
            activeThumbnail={activeThumbnail}
          >
            &lt;
          </LeftStyledButton>
          <InnerCarousel position={carouselPosition}>
            {this.imageLoader()}
          </InnerCarousel>
          <RightStyledButton
            className="right-button"
            onClick={handleButtonClick}
            number={numberOfImages}
            activeThumbnail={activeThumbnail}
          >
            &gt;
          </RightStyledButton>
        </GridContainer>
      </GridWrapper>
    );
  }
}

export default UpperCarousel;
