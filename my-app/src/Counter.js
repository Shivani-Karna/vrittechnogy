import React, { Component } from 'react';
import Child from './Child';

export default class second extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countDown: 0,
        };
    }
    increment = () => {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                countDown: prevState.countDown + 1,
            }));
        }, 1000);
    };
    decrement = () => {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                countDown: prevState.countDown - 1,
            }));
            if (this.state.countDown === 0) {
                this.stopCountDown();
                this.setState({
                    countDown: 0,
                });
            }
        }, 1000);
    };
    startIncrement = () => {
        clearInterval(this.interval);
        this.increment();
    };

    startDecrement = () => {
        clearInterval(this.interval);
        this.decrement();
    };
    stopCountDown = () => {
        clearInterval(this.interval);
    };


    render() {
        console.log(this, 'test');
        return (
            <div>
                <Child countDown={this.state.countDown} />
                <p>{this.props.children}</p>
                <button onClick={this.startIncrement}>Start Increment</button>
                <button onClick={this.startDecrement}>Start Decrement</button>
                <button onClick={this.stopCountDown}>Stop</button>
            </div>
        );

    }
}
