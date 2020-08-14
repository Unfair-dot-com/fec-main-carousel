import React from 'react';
import Button from './Button';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    // TODO replace this with a style sheet
    const imgStyle = {
      maxHeight: '500px',
    };

    // sets a default value for the url, since state data
    // isn't available when the page first renders
    const { handleButtonClick, images } = this.props;
    const imageURL = images.length > 0
      ? images[0].fullSizeURL : undefined;

    return (
      <div className="product-image">
        <Button className="left-button" onClick={handleButtonClick}>
          &lt;
        </Button>

        <img alt="Click to Zoom" src={imageURL} style={imgStyle} />

        <Button className="right-button" onClick={handleButtonClick}>
          &gt;
        </Button>
      </div>
    );
  }
}

export default Image;
