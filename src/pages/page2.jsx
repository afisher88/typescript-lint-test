import React from 'react';
import ReactDOM from 'react-dom';
import CommonThingOne from '../components/common/CommonThingOne';
import CommonThingTwo from '../components/common/CommonThingTwo';
import PageTwoThingOne from '../components/page2/PageTwoThingOne';
import PageTwoThingTwo from '../components/page2/PageTwoThingTwo';

class Page2 extends React.Component {
  render() {
    return (
      <main>
        <h1>Page 2</h1>
        <CommonThingOne />
        <CommonThingTwo />
        <PageTwoThingOne />
        <PageTwoThingTwo />
      </main>
    );
  }
}

ReactDOM.render(<Page2 />, document.getElementById('root'));
