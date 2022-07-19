
import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Footer from './footer';

class App extends React.Component {
  constructor() {
    super()
    this.state = {page: {label: "Home", hash: "home"}}
    window.location.href = "#/" + this.state.page.hash;

    this.changePageState = this.changePageState.bind(this);
    }

    changePageState(page) {
      console.log("Sto cambiando lo stato dell'applicazione", page);
      const newState = { page: { label: page, hash: page.toLowerCase() } }
      this.setState(newState);
      window.location.href = "#/" + page.toLowerCase();
    }

  render() {
    return (
      <div className='app'>
        <Nav state={this.state} clickCallback={this.changePageState}/>
          {this.state.page.label === "Home" && <Home/>}
          {this.state.page.label === "About" && <About/>}
        <Footer state={this.state} clickCallback={this.changePageState}/>
      </div>
  )
}


}
export default App;
