/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UpperCarousel from './UpperCarousel';
import LowerCarousel from './LowerCarousel';

const StyledApp = styled.div`
  background-color: #fff;
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
      console.log('right button clicked!');
      this.setState((prevState) => {
        prevState.activeThumbnail += 1;
        return { activeThumbnail: prevState.activeThumbnail };
      });
    // if left button is clicked, decrement activeThumbnail
    } else if (className.indexOf('left') !== -1) {
      console.log('left button clicked!');
      this.setState((prevState) => {
        prevState.activeThumbnail -= 1;
        return { activeThumbnail: prevState.activeThumbnail };
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
          handleButtonClick={this.handleButtonClick}
          activeThumbnail={activeThumbnail}
        />
        <br />
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
