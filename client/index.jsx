import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Image from './components/Image';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      productId: 0,
    };
    this.carouselLoader = this.carouselLoader.bind(this);
  }

  componentDidMount() {
    axios.get(`/products/${this.state.productId}`)
      .then((pictures) => {
        this.setState({
          images: pictures.data
        });
      })
      .catch(() => console.log('error getting pictures'));
  }

  carouselLoader() {
    if (this.state.images.length > 0) {
      return this.state.images.map((image) => <img alt="Click Me!" id={image.index} className="thumbnail" src={image.thumbnailURL} />);
    }
    return <div />;
  }

  render() {
    // TODO replace these with a style sheet
    const carouselStyle = {
      display: 'flex',
      flexDirection: 'row',
    };

    return (
      <div>
        <Image images={this.state.images} />
        <br />
        <div className="carousel" style={carouselStyle}>
          {this.carouselLoader()}
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main-carousel'));
