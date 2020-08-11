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
      })
      .catch(() => console.log('error getting pictures'));
  }

  render() {
    // sets a default value for the url, since state data
    // isn't available when the page first renders
    const imageURL = this.state.images.length > 0
      ? this.state.images[0].fullSizeURL : null;

    // TODO replace this with a style sheet
    const imgStyle = {
      maxHeight: '500px',
    };

    return (
      <div>
        <div>
          <img alt="Click to Zoom" src={imageURL} style={imgStyle} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main-carousel'));
