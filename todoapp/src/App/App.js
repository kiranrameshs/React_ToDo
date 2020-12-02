import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routing from './routing'
import './App.scss';


/**
 * App component holding the routes with heading
 */
class App extends Component {
  constructor (){
    super();
    console.log("constructor");
    
  }
  render (){
    return (
      <Router>
        <div className="container">
          <h1>ToDo React Application</h1>
        </div>
      <Routing />
    </Router>
      );
  }
}

export default App;
