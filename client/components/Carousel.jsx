/* eslint-disable no-console */
import React from 'react';
import Thumbnail from './Thumbnail';
import Button from './Button';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.carouselLoader = this.carouselLoader.bind(this);
  }

  carouselLoader() {
    // checks to see if images have loaded yet
    if (this.props.images.length > 0) {
      const { activeThumbnail, handleThumbnailClick } = this.props;
      // if so, constructs thumbnails in the carousel
      return this.props.images.map((image) => (
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

    const { handleButtonClick } = this.props;

    return (
      <div className="carousel" style={carouselStyle}>
        <Button className="left-button" onClick={handleButtonClick}>
          &lt;
        </Button>
        {this.carouselLoader()}
        <Button className="right-button" onClick={handleButtonClick}>
          &gt;
        </Button>
      </div>
    );
  }
}

export default Carousel;
