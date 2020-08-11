import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.carouselLoader = this.carouselLoader.bind(this);
  }

  carouselLoader() {
    if (this.props.images.length > 0) {
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