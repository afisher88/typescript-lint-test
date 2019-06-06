import React from 'react';
import ReactDOM from 'react-dom';

class Page1 extends React.Component {
  render() {
    return (
      <div>
        <p>Page 1</p>
      </div>
    );
  }
}

ReactDOM.render(<Page1 />, document.getElementById('root'));
