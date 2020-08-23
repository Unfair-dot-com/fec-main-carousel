/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UpperCarousel from './UpperCarousel';
import LowerCarousel from './LowerCarousel';

const serverURL = 'http://ec2-3-80-148-248.compute-1.amazonaws.com';

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
    // axios.get(`/images/${productId}`)
    axios.get(`${serverURL}/images/${productId}`)
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
