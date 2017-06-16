import React, {Component} from 'react';
import Navbar from "./navigation/Navbar"
import Footer from "./navigation/Footer.js"
import Routes from "./navigation/Routes.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
