import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.carouselLoader = this.carouselLoader.bind(this);
  }

  carouselLoader() {
    // checks to see if images have loaded yet
    if (this.props.images.length > 0) {
      // if so, constructs image carousel
      return this.props.images.map((image) => <img alt="Click Me!" id={image.index} className="thumbnail" src={image.thumbnailURL} />);
    }
    return <div />;
  }

  render() {
    // TODO replace these with a style sheet
    const carouselStyle = {
      display: 'flex',
      flexDirection: 'row',
    };

    return (
      <div className="carousel" style={carouselStyle}>
        {this.carouselLoader()}
      </div>
    );
  }
}

export default Carousel;