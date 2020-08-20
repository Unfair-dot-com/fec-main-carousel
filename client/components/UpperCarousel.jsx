/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { GridWrapper, Grid } from './Grid';
import Button from './Button';

// inherits grid properties and max-width from Grid component
const GridContainer = styled(Grid)`
  max-width: 45vw;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  grid-area: 1 / 1 / 2 / 4;
`;

// left is dynamically generated based on current carousel position
const InnerCarousel = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  left: ${(props) => props.position}px;
  transition: left 250ms cubic-bezier(0.53,0.34,0.51,0.9) 0s;
  width: 100%;
`;

// the inner-most element of the carousel
const StyledImage = styled.img`
  max-width: 100%;
  cursor: zoom-in;
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
      visibleImage: 0,
      carouselPosition: 0,
    };
    // used to measure width of the carousel wrapper
    this.imageWidthRef = React.createRef();
    this.imageLoader = this.imageLoader.bind(this);
  }

  componentDidUpdate() {
    const { activeThumbnail } = this.props;
    const { visibleImage } = this.state;
    // checks if activeThumbnail is the same as visible image
    if (activeThumbnail !== visibleImage) {
      // calculates how many pixels to move the carousel
      const changeInPosition = (visibleImage - activeThumbnail)
        * this.imageWidthRef.current.clientWidth;
      // updates the carouselPosition
      this.setState((prevState) => {
        const newPosition = prevState.carouselPosition + changeInPosition;
        return {
          carouselPosition: newPosition,
          visibleImage: activeThumbnail,
        };
      });
    }
  }

  imageLoader() {
    const { images } = this.props;
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
      handleButtonClick, numberOfImages, activeThumbnail,
    } = this.props;
    const { carouselPosition } = this.state;

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
          <CarouselWrapper ref={this.imageWidthRef}>
            <InnerCarousel position={carouselPosition}>
              {this.imageLoader()}
            </InnerCarousel>
          </CarouselWrapper>
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
