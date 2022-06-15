import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dash from './Dash';
import React from 'react';
import { Route } from 'react-router-dom';

class App extends React.Component {

  componentWillMount(){
    //lifecycle hook before rendering (API call) https://www.pluralsight.com/guides/how-to-use-componentwillmount
    if(localStorage.getItem('jwt')) {
      this.props.currentUser()
    }
  }

  render() {
    return (
      <Login/>
    )
  }
}

export default App;

