// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
