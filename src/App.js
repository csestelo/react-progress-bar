import React, { Component } from 'react';
import finished from './finished.svg';
import './App.css';


class ProgressBar extends Component {
    constructor() {
        super(ProgressBar);
        this.state = {
            start: null,
            finish: null,
            totalSteps: 8,
            currentStep: 8
        }
    }

    getCurrentPercentage() {
        if (this.state.currentStep === null) {
            return "0%"
        } else {
            const current_pct = this.state.currentStep / this.state.totalSteps * 100;
            return `${current_pct.toString()}%`
        }
    }

    isFinished(){
        return this.state.currentStep === this.state.totalSteps
    };

    displayIsFinished() {
        if (this.isFinished()) {
            return "block"
        } else {
            return "none"
        }
    };

    update(step){
    }

    render() {
        return (
            <div className="singleTask">
                <p className="taskName">{this.props.taskName}:</p>
                <div className="progress-bar">
                    <div className="progress" style={{width: this.getCurrentPercentage()}}>
                        <div style={{display: this.displayIsFinished()}}>
                            <img src={finished} className="checkIsFinished" alt="checkLogo" />
                        </div>
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
            <ProgressBar taskName={"barra1"} />
            <ProgressBar taskName={"barra2"} />
            <ProgressBar taskName={"barra3"} />
        </header>
      </div>
    );
  }
}

export default App;
