/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledUpperCarousel = styled.div`
  background-color: purple
`;

class UpperCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    // TODO replace this with a styled component
    const imgStyle = {
      maxHeight: '500px',
    };

    // sets a default value for the url, since state data
    // isn't available when the page first renders
    const { handleButtonClick, images, numberOfImages, activeThumbnail, className } = this.props;
    const imageURL = images.length > 0
      ? images[0].fullSizeURL : undefined;

    return (
      <StyledUpperCarousel className={`product-image ${className}`}>
        <Button className="left-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &lt;
        </Button>

        <img alt="Click to Zoom" src={imageURL} style={imgStyle} />

        <Button className="right-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &gt;
        </Button>
      </StyledUpperCarousel>
    );
  }
}

export default UpperCarousel;
