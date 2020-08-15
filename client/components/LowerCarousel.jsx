/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import Button from './Button';

const StyledLowerCarousel = styled.div`
  color: purple
`;
//  max-width: 200px,
//   display: flex,
//  flexDirection: row,
//  alignItems: center,
//  overflow: hidden,

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
      <StyledLowerCarousel className={`lower-carousel-wrapper ${className}`}>
        Hello!
        <Button className="left-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &lt;
        </Button>
        <div className="lower-carousel">
          {this.carouselLoader()}
        </div>
        <Button className="right-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &gt;
        </Button>
      </StyledLowerCarousel>
    );
  }
}

export default LowerCarousel;
