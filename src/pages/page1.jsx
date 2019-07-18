import React from 'react';
import ReactDOM from 'react-dom';
import CommonThingOne from '../components/common/CommonThingOne';
import CommonThingTwo from '../components/common/CommonThingTwo';
import PageOneThingOne from '../components/page1/PageOneThingOne';
import PageOneThingTwo from '../components/page1/PageOneThingTwo';

class Page1 extends React.Component {
  render() {
    const test = '';

    return (
      <main>
        <h1>Page 1</h1>
        <CommonThingOne />
        <CommonThingTwo />
        <PageOneThingOne />
        <PageOneThingTwo />
      </main>
    );
  }
}

ReactDOM.render(<Page1 />, document.getElementById('root'));
