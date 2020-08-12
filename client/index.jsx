import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Image from './components/Image';
import Carousel from './components/Carousel';

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

  render() {
    return (
      <div>
        <Image images={this.state.images} />
        <br />
        <Carousel images={this.state.images} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main-carousel'));

export default App;
