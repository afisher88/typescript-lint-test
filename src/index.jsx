import React from 'react';
import ReactDOM from 'react-dom';
import balloons from './img/balloons.jpg';
import './scss/main.scss';

class MyComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <img src={balloons} width="300" alt="" />
        <p>Hello World!</p>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
