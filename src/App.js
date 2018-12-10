import React, { Component } from 'react';
import finished from './finished.svg';
import './App.css';


const randomstring = require("randomstring");

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: new Date(),
            finish: null,
            totalSteps: props.totalSteps,
            currentStep: props.currentStep
        }
    }

    getCurrentPercentage() {
        if (this.state.currentStep === 0) {
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
        this.state = {tasks: []}
    };

    // TODO: criar um setInterval que a cada 10 segundos cria uma nova task
    // TODO: criar um setInterval que a cada 2 segundos incrementa aleatoriamente
    // o step de uma task existente

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    componentDidMount() {
        setInterval(
            () => {
                const newTask = randomstring.generate({
                    length: 10,
                    charset: 'alphabetic'
                });

                let curr_tasks = this.state.tasks;
                curr_tasks.push({
                    name: newTask,
                    totalSteps: this.getRandomInt(3, 10),
                    currentStep: 0});
                this.setState({tasks: curr_tasks})
            },
            5000);
        setInterval(
            () => {
                if (this.state.tasks.length) {
                    const tasks = this.state.tasks;
                    let i = this.getRandomInt(0, tasks.length - 1);
                    let task = tasks[i];
                    task.currentStep += 1;
                    tasks[i] = task;

                    this.setState({tasks: tasks})
                }
            },
            2000
        )
    }

    render() {
        const progressBars = this.state.tasks.map(function (value, index) {
            console.log(value.currentStep);
            return <ProgressBar key={index} taskName={value.name} totalSteps={value.totalSteps} currentStep={value.currentStep}/>
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
