import React from 'react';
import ReactDOM from 'react-dom';

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
    let imageURL = this.props.images !== undefined
      ? this.props.images[0] : undefined;

    if (imageURL !== undefined) {
      imageURL = imageURL.fullSizeURL;
    }

    return (
      <div className="product-image">
        <img alt="Click to Zoom" src={imageURL} style={imgStyle} />
      </div>
    );
  }
}

export default Image;
