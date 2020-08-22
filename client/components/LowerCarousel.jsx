/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Grid, GridWrapper } from './Grid';
import Thumbnail from './Thumbnail';
import Button from './Button';

// inherits grid properties and max-width from Grid component
const GridContainer = styled(Grid)`
  margin: 0 auto;
`;

// calculates width dynamically
const CarouselAnchor = styled.div`
  padding: 12px 4px;
  width: ${(props) => props.numOfThumbnails * 70}px;
  overflow: hidden;
  margin: 0 auto;
`;

// left is dynamically generated based on current carousel position
const CarouselSlider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  left: ${(props) => props.position}px;
  transition: left 250ms cubic-bezier(0.53,0.34,0.51,0.9) 0s;
  width: 100%;
`;

class LowerCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVisibleThumbnail: 0,
      // Calculates number of thumbnails that will fit evenly into the carousel width
      // TODO: replace the 500 to make it dynamically generate based on width of parent div
      numOfThumbnails: 0,
      carouselPosition: 0,
    };
    this.carouselRef = React.createRef();
    this.thumbnailLoader = this.thumbnailLoader.bind(this);
  }

  componentDidMount() {
    // calculates how many thumbnails will fit evenly into the carousel
    const carouselWidth = this.carouselRef.current.clientWidth;
    const numOfThumbnails = Math.floor((carouselWidth - 48 * 2 - 8) / 70);
    this.setState({ numOfThumbnails });
  }

  componentDidUpdate() {
    const { activeThumbnail, images } = this.props;
    const { firstVisibleThumbnail, numOfThumbnails } = this.state;

    // checks if new selected Thumbnail is currently hidden to the right
    let isHidden = activeThumbnail > (firstVisibleThumbnail + numOfThumbnails - 1)
      && activeThumbnail < images.length;

    if (isHidden) {
      // if so, move the carousel to the left
      this.setState((prevState) => {
        const newPosition = prevState.carouselPosition - 70;
        const newThumbnail = prevState.firstVisibleThumbnail + 1;
        return {
          carouselPosition: newPosition,
          firstVisibleThumbnail: newThumbnail,
        };
      });
      return;
    }
    // checks if new selected Thumbnail is currently hidden to the left
    isHidden = activeThumbnail < firstVisibleThumbnail && activeThumbnail >= 0;

    if (isHidden) {
      // if so, move the carousel to the right
      this.setState((prevState) => {
        const newPosition = prevState.carouselPosition + 70;
        const newThumbnail = prevState.firstVisibleThumbnail - 1;
        return {
          carouselPosition: newPosition,
          firstVisibleThumbnail: newThumbnail,
        };
      });
    }
  }

  thumbnailLoader() {
    const { images, activeThumbnail, handleThumbnailClick } = this.props;
    // checks to see if images have loaded yet
    if (images.length > 0) {
      // if so, constructs thumbnails in the carousel
      return images.map((image) => (
        <Thumbnail
          id={image.index}
          activeIndex={activeThumbnail}
          src={image.thumbnailURL}
          onClick={handleThumbnailClick}
        />
      ));
    }
    return <div />;
  }

  render() {
    const { handleButtonClick, numberOfImages, activeThumbnail } = this.props;
    const { numOfThumbnails, carouselPosition } = this.state;

    return (
      <GridWrapper>
        <GridContainer
          ref={this.carouselRef}
        >
          <Button
            className="left-button"
            onClick={handleButtonClick}
            number={numberOfImages}
            activeThumbnail={activeThumbnail}
          >
            &lt;
          </Button>
          <CarouselAnchor numOfThumbnails={numOfThumbnails}>
            <CarouselSlider position={carouselPosition}>
              {this.thumbnailLoader()}
            </CarouselSlider>
          </CarouselAnchor>
          <Button
            className="right-button"
            onClick={handleButtonClick}
            number={numberOfImages}
            activeThumbnail={activeThumbnail}
          >
            &gt;
          </Button>
        </GridContainer>
      </GridWrapper>
    );
  }
}

export default LowerCarousel;
