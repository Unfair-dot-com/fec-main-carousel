/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Image from './Image';
import Carousel from './Carousel';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
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
      this.setState((state) => {
        state.activeThumbnail += 1;
        return { activeThumbnail: state.activeThumbnail };
      });
    // if left button is clicked, decrement activeThumbnail
    } else if (className.indexOf('left') !== -1) {
      console.log('left button clicked!');
      this.setState((state) => {
        state.activeThumbnail -= 1;
        return { activeThumbnail: state.activeThumbnail };
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
    const { images, activeThumbnail } = this.state;
    return (
      <div>
        <Image
          images={images}
          handleButtonClick={this.handleButtonClick}
          activeImage={activeThumbnail}
        />
        <br />
        <Carousel
          images={images}
          handleButtonClick={this.handleButtonClick}
          activeThumbnail={activeThumbnail}
        />
        <br />
        <Button onClick={this.handleButtonClick}>&lt;</Button>
        <Button onClick={this.handleButtonClick}>&gt;</Button>
      </div>
    );
  }
}

export default App;
