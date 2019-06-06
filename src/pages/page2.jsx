import React from 'react';
import ReactDOM from 'react-dom';

class Page2 extends React.Component {
  render() {
    return (
      <div>
        <p>Page 2</p>
      </div>
    );
  }
}

ReactDOM.render(<Page2 />, document.getElementById('root'));
