import _ from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom';

// import main stylesheet
import '../styles/main.scss';

const returnRandomNumber = () => {
  return Math.random();
};

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World! {returnRandomNumber()}</p>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
