import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return <p>Hello World!</p>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
