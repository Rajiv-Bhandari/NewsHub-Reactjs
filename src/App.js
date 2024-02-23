import './App.css';

// class based component
import React, { Component } from 'react'
import NavBar from './components/navBar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={12}/>
      </div>
    )
  }
}
