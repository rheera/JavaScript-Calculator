import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


const defaultState = {
    input: ""
};


const BUTTONS = ["AC", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="]
// FCC requires the ids named different so this array just contains those names
const BUTTONS_FCC = ["clear", "divide", "seven", "eight", "nine", "multiply", "four", "five", "six", "subtract", "one", "two", "three", "add", "zero", "decimal", "equals"]

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // if input is a number
        if (e.target.value >= 0 && e.target.value <= 9) {
            // if there's already numbers written except for 0 then concatenate the new one on
            if (/[1-9||\.]/.test(this.props.input)) {
                this.props.onClick(this.props.input.concat(e.target.value));
            }
            // if there are no numbers or 0 start the input from scratch with the button clicked
            else {
                this.props.onClick(e.target.value);
            }
        }
        // if input is clear set input display to 0
        else if (e.target.value === "AC") {
            this.props.onClick("0");
        }
        // if input is an operation clear the input display and show the operation
        else if (e.target.value === "+" || e.target.value === "-" || e.target.value === "/" || e.target.value === "X") {
            this.props.onClick(e.target.value);
        }
        // if input is a decimal
        else if (e.target.value === "."){

            // if input already contains a decimal, do nothing aka, don't add another one
            if (/\.+/.test(this.props.input)) {
            }

            // if the input is numbers add a decimal to it
            else if (/[\d]/.test(this.props.input)) {
                this.props.onClick(this.props.input.concat(e.target.value));
            }

            // if the input is an operation symbol or AC (0) make the input 0.
            else {
                this.props.onClick("0.")
            }
        }
    }

    render() {
        return (
            <div id={"buttons-div"} className={"d-flex flex-row flex-wrap"}>
                {BUTTONS.map((button, i) => (
                    <div id={"div-" + button} key={button + "-div"} className={"button-div"}>
                        <button id={BUTTONS_FCC[i]} key={button + i} className={"buttons btn btn-dark btn-block"}
                                value = {button} onClick={this.handleClick}>{button}</button>
                    </div>
                ))}
            </div>
        );
    }
}

class InputDisplay extends React.Component {
    render() {
        const input = this.props.input;
        return (
            <div id={"current-input-div"}>
                {input}
            </div>
        );
    }
}

class EquationDisplay extends React.Component {
    render() {
        return (
            <div id={"equation-div"}>
                Equation
            </div>
        );
    }
}

class Display extends React.Component {
    render() {
        const input = this.props.input;
        return (
            <div id={"display-div"}>
                <EquationDisplay input = {input} />
                <InputDisplay input = {input} />
            </div>
        );
    }
}

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(input) {
        this.setState({
            input: input
        });
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-md-center align-items-center vh-100"}>
                    <div>
                        <Display
                            input={this.state.input}
                        />
                        <Calculator
                            input={this.state.input}
                            onClick={this.handleClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default AppWrapper;
