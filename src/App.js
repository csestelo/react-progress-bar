import React, { Component } from 'react';
import finished from './finished.svg';
import './App.css';


class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: new Date(),
            finish: null,
            totalSteps: props.totalSteps,
            currentStep: null
        }
    }

    getCurrentPercentage() {
        if (this.state.currentStep === null) {
            return "0%"
        } else {
            const current_pct = this.state.currentStep / this.state.totalSteps * 100;
            return `${current_pct}%`
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

    update(step) {
        this.setState({currentStep: step}, () => {
            if (this.isFinished()) {
                this.setState({finish: new Date()})
            }
        })
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
    constructor(props) {
        super(props);
        this.state = {tasks: ["barra1", "barra2", "barra3"]}
    };

    // TODO: criar um setInterval que a cada 10 segundos cria uma nova task
    // TODO: criar um setInterval que a cada 2 segundos incrementa aleatoriamente
    // o step de uma task existente

    render() {
        const progressBars = this.state.tasks.map(function (value, index) {
            return <ProgressBar key={index} taskName={value} totalSteps={8}/>
        });

        return (
            <div className="App">
                <header className="App-header">
                    {progressBars}
                </header>
            </div>
        );
    }
}

export default App;
