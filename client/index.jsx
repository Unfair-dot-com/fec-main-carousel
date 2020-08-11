import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
      return this.state.images.map((image) => <img alt="Click Me!" id={image.index} className='thumbnail' src={image.thumbnailURL} />);
    }
    return <div />;
  }

  render() {
    // sets a default value for the url, since state data
    // isn't available when the page first renders
    const imageURL = this.state.images.length > 0
      ? this.state.images[0].fullSizeURL : null;

    // TODO replace these with a style sheet
    const imgStyle = {
      maxHeight: '500px',
    };

    const carouselStyle = {
      display: 'flex',
      flexDirection: 'row',
    };


    return (
      <div>
        <div className="product-image">
          <img alt="Click to Zoom" src={imageURL} style={imgStyle} />
        </div> <br/>
        <div className="carousel">
          {this.carouselLoader()}
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main-carousel'));
