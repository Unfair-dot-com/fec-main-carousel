/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import Thumbnail from './Thumbnail';
import Button from './Button';

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
    // TODO replace these with a styled components
    const carouselStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    };

    const { handleButtonClick, numberOfImages, activeThumbnail } = this.props;

    return (
      <div className="carousel" style={carouselStyle}>
        <Button className="left-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &lt;
        </Button>
        {this.carouselLoader()}
        <Button className="right-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &gt;
        </Button>
      </div>
    );
  }
}

export default LowerCarousel;
