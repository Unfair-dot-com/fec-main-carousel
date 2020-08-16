/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import Button from './Button';

const StyledGridContainer = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: 48px auto 48px;
  grid-template-rows: 100%;
`;

const StyledCarousel = styled.div`
  overflow: hidden;
  display: flex;
  flexDirection: row;
  alignItems: center;
  padding: 12px 4px;
`;

class LowerCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.carouselLoader = this.carouselLoader.bind(this);
  }

  carouselLoader() {
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
    const { handleButtonClick, numberOfImages, activeThumbnail, className } = this.props;

    return (
      <StyledGridContainer className={`lower-carousel-wrapper ${className}`}>
        <Button className="left-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &lt;
        </Button>
        <StyledCarousel className="lower-carousel">
          {this.carouselLoader()}
        </StyledCarousel>
        <Button className="right-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &gt;
        </Button>
      </StyledGridContainer>
    );
  }
}

export default LowerCarousel;
