import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div className="App__Aside"></div>
      <div className="App__Form">
      

      <Route exact path = "/" component = { SignInForm }>
      
      </Route>
      <Route path ="/sign-up" component = { SignUpForm }>
      </Route>
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
