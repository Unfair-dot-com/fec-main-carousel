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
    };
  }

  componentDidMount() {
    axios.get(`/images/${this.state.productId}`)
      .then((pictures) => {
        this.setState({
          images: pictures.data,
        });
        return pictures.data;
      })
      .catch(() => console.log('error getting pictures'));
  }

  handleClick() {
    console.log('button was clicked!');
  }

  render() {
    return (
      <div>
        <Image images={this.state.images} />
        <br />
        <Carousel images={this.state.images} />
        <br />
        <Button onClick={this.handleClick}>&lt;</Button>
        <Button onClick={this.handleClick}>&gt;</Button>
      </div>
    );
  }
}

export default App;
