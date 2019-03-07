import React, { Component } from 'react';
import './App.css';

// import {name, age} from './components/data';
import Booklist from './components/booklist';

class App extends React.Component{
  render(){
    return(
      <section>
      <Booklist></Booklist>
    </section>
    )
  }
}
export default App;
