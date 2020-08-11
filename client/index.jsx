import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      productId: 1,
    };
  }

  componentDidMount() {
    axios.get(`/products/${this.state.productId}`)
      .then((pictures) => {
        this.setState({
          images: pictures.data
        });
        console.log('pictures are here: ', pictures);
      })
      .catch(() => console.log('error getting pictures'));
  }

  render() {
    return (
      <div>
        Main Carousel coming soon!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main-carousel'));
