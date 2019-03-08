import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Dashboard from './pages/Dashboard';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App">
      
      

      <Route exact path = "/" component = { SignInForm }>
      </Route>
      <Route path ="/sign-up" component = { SignUpForm }>
      </Route>
      <Route path ="/dashboard" component = { Dashboard }>
      </Route>
      </div>
      
      </Router>
    );
  }
}

export default App;
