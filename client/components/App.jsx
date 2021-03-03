/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UpperCarousel from './UpperCarousel';
import LowerCarousel from './LowerCarousel';

const serverURL = 'http://ec2-3-80-148-248.compute-1.amazonaws.com:5001';

const StyledApp = styled.div`
  background-color: #fff;
  width: 45vw;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      numberOfImages: 0,
      productId: window.location.pathname.split('/')[2],
      activeThumbnail: 0,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  // gets the list of all images for this product
  componentDidMount() {
    const { productId } = this.state;
    axios.get(`/images/${productId}`)
    //axios.get(`${serverURL}/images/${productId}`)
      .then((pictures) => {
        this.setState({
          images: pictures.data,
          numberOfImages: pictures.data.length,
        });
        return pictures.data;
      })
      .catch(() => console.log('error getting pictures'));
  }

  handleButtonClick(e) {
    const { className } = e.target;

    // if right button is clicked, increment activeThumbnail
    if (className.indexOf('right') !== -1) {
      this.setState((prevState) => {
        const newThumbnail = prevState.activeThumbnail + 1;
        return { activeThumbnail: newThumbnail };
      });
    // if left button is clicked, decrement activeThumbnail
    } else if (className.indexOf('left') !== -1) {
      this.setState((prevState) => {
        const newThumbnail = prevState.activeThumbnail - 1;
        return { activeThumbnail: newThumbnail };
      });
    }
  }

  // passes the index of the clicked thumbnail to state
  handleThumbnailClick(e) {
    this.setState({
      activeThumbnail: Number(e.target.id),
    });
  }

  render() {
    const { images, numberOfImages, activeThumbnail } = this.state;
    const { className } = this.props;
    return (
      <StyledApp className={className}>
        <UpperCarousel
          images={images}
          numberOfImages={numberOfImages}
          activeThumbnail={activeThumbnail}
          handleButtonClick={this.handleButtonClick}
        />
        <LowerCarousel
          images={images}
          numberOfImages={numberOfImages}
          activeThumbnail={activeThumbnail}
          handleButtonClick={this.handleButtonClick}
          handleThumbnailClick={this.handleThumbnailClick}
        />
      </StyledApp>
    );
  }
}

export default App;

/**
 * Zoom feature:
 * On mouse-over of the upper carousel,
 * Also, a translucent square appears on the upper carousel
 * The square is just over 1/3 the width/height of the upper picture
 * The square tracks the movement of the mouse so that the mouse stays in the center of the square,
 *  except that the edge of the square does not run over the side of the uppper carousel.
 *
 * Step 1: Trigger a very simple mouseover action on the upper carousel
 * Step 2: use this mouseover to toggle a new component
 * Step 3: Create the code to track mouse position and update it in state?
 * Step 4: Create the translucent box, feed it the updated mouse position
 * Step 5: Adjust so that mouse stays centered in the box, until box is about to go out of bounds
 * Step 6: Change zoomed component to be a larger picture
 * Step 7: Invert the movement of the zoomed picture so that it appears to track the mouse
 *
 * Simultaneously, another component appears to the right of the upper carousel
 * It perfectly displays the portion of the picture which is covered by the translucent square
 */
