/* eslint-disable no-console */
import React from 'react';
import Thumbnail from './Thumbnail';
import Button from './Button';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeThumbnail: 0,
    };
    this.carouselLoader = this.carouselLoader.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  carouselLoader() {
    // checks to see if images have loaded yet
    if (this.props.images.length > 0) {
      const { activeThumbnail } = this.state;
      // if so, constructs image carousel
      return this.props.images.map((image) => (
        <Thumbnail
          id={image.index}
          activeIndex={activeThumbnail}
          src={image.thumbnailURL}
          onClick={this.handleThumbnailClick}
        />
      ));
    }
    return <div />;
  }

  // passes the index of the clicked thumbnail to state
  handleThumbnailClick(e) {
    this.setState({
      activeThumbnail: Number(e.target.id),
    });
  }

  handleButtonClick(e) {
    console.log('button clicked!');
  }

  render() {
    // TODO replace these with a styled components
    const carouselStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    };

    return (
      <div className="carousel" style={carouselStyle}>
        <Button className='left-button' onClick={this.handleButtonClick}>&lt;</Button>
        {this.carouselLoader()}
        <Button className='right-button' onClick={this.handleButtonClick}>&gt;</Button>
      </div>
    );
  }
}

export default Carousel;