import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Footer from './Footer';

class App extends Component {
  state ={name :'hüseyin'}
NameChanged(){

this.setState({name:'Mehmet'});
}

  render() {
    return (
      <div className="App">
       <Counter/>

       <Footer/>
             </div>
    );
  }
}

export default App;
