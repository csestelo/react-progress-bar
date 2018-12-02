import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ProgressBar extends Component {
    constructor() {
        super();
        this.state = {
            start: null,
            finish: null,
            totalSteps: 100,
            currentStep: 70
        }
    }

    getCurrentPercentage(){
        return "20%"
    }

    isFinished(){
        return this.state.currentStep === this.state.totalSteps;
    }

    update(step){
    }

    render() {
        return (
            <div>
                <p>{this.props.taskName}</p>
                <div className="progress-bar">
                    <div className="progress" style={{width: this.getCurrentPercentage()}}>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <ProgressBar taskName={"barra1"} />
            <ProgressBar taskName={"barra2"} />
            <ProgressBar taskName={"barra3"} />
        </header>
      </div>
    );
  }
}

export default App;
