/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledUpperCarousel = styled.div`
  background-color: white
`;

const StyledImage = styled.img`
  max-height: 500px
`;

class UpperCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    // sets a default value for the url, since state data
    // isn't available when the page first renders
    const { handleButtonClick, images, numberOfImages, activeThumbnail, className } = this.props;
    const imageURL = images.length > 0
      ? images[2].fullSizeURL : undefined;

    return (
      <StyledUpperCarousel className={`product-image ${className}`}>
        <Button className="left-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &lt;
        </Button>

        <StyledImage alt="Click to Zoom" src={imageURL} />

        <Button className="right-button" onClick={handleButtonClick} number={numberOfImages} activeThumbnail={activeThumbnail}>
          &gt;
        </Button>
      </StyledUpperCarousel>
    );
  }
}

export default UpperCarousel;
