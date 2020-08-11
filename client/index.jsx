import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      images: [],
      thumbnails: [],
    };
  }

  render () {
    return (
      <div>
        Main Carousel coming soon!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main-carousel'));
