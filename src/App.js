import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import data from './resumeData.json';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }



  render() {
    return (
      <div className="App">
        <Header data={data.main}/>
        <About data={data.main}/>
        <Resume data={data.resume}/>
        <Portfolio data={data.resume}/>
        <Contact data={data.main}/>
        <Footer data={data.main}/>
      </div>
    );
  }
}

export default App;
