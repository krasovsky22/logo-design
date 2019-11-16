import React from 'react';
import './App.css';

import Animation from './Animation';
import drawLogo from "./drawLogo";

import {ReactComponent as Logo} from './VLogo.svg';

class App extends React.Component {
  async componentDidMount() {
    await Animation();
    await drawLogo();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="ml8">
          <span className="logo-container">
            <span className="logo">
              <Logo />
            </span>
          </span>
            <span className="circle circle-white"></span>
            <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
          </h1>
        </header>
      </div>
    );
  }

}

export default App;
