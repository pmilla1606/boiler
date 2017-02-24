import _ from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom';

// import main stylesheet
import '../styles/main.scss';

// An array containing values
const SIMPLE_ARRAY = ['one', 'two', 'three'];

// An array containing objects
const COMPLEX_ARRAY = [
  {name: 'Peter', fav: 'Dog'},
  {name: 'Da Hea', fav: 'Cat'}
];

// A object containing objects
const OBJ = {
  one: {
    name: 'Peter',
    fav: 'Dog'
  },
  two: {
    name: 'Da Hea',
    fav: 'Cat'
  }
};

class App extends React.Component {

  returnRandomNumber() {
    return Math.random()
  }

  showSimpleArray(myArray){
    for(var i=0; i < myArray.length; i++){
      return myArray[i];
    }
  }


  render() {
    /**
     * Exercise:
     * Write functions for each of the data structures above (SIMPLE_ARRAY, COMPLEX_ARRAY and OBJ)
     * that will take the data structure as an input and console.log the relevant pieces of information.
     * For example, the function handling `OBJ` might return "Name: Peter, Favorite Animal: Dog".
     *
     * Put all code below this comment and for now, don't worry about the render method you're writing this in
     * or any other react specific code.
     *
     * Extra Credit (React): Return the relevant information to the DOM using react (an example of how JSX works can
     * be found in the return statement below).
     */

     // Code goes here
     function showSimpleArray(myArray){
        for(var i=0; i < myArray.length; i++){
          console.log(myArray[i]);
        }
     }

     function showComplexArray(myArray){
      for(var i=0; i < myArray.length; i++){
        console.log(myArray[i].name + '\'s favorite animal is a ' + myArray[i].fav);
      }
     }

     function showObj(myObj){
      for (var person in myObj) {
        console.log(myObj[person]["name"] + " likes " + myObj[person]["fav"] + "s");
      }
    }

     showSimpleArray(SIMPLE_ARRAY);
     showComplexArray(COMPLEX_ARRAY);
     showObj(OBJ);

    return (
      <div>
        <p>Hello World! {this.returnRandomNumber()}</p>
      </div>

    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
