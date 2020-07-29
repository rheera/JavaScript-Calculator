import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


const defaultState = {
    total: 0,
    equation: "",
    input: ""
};


const BUTTONS = ["AC", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="]
// FCC requires the ids named different so this array just contains those names
const BUTTONS_FCC = ["clear", "divide", "seven", "eight", "nine", "multiply", "four", "five", "six", "subtract", "one", "two", "three", "add", "zero", "decimal", "equals"]

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // initial input is still going to be handled locally
        this.state = {
            input: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick({currentTarget}) {
        if (currentTarget.value >= 0 && currentTarget.value <= 9) {
            // if there's already numbers written except for 0 then concatenate the new one on
            if (/[1-9||\.]/.test(this.state.input)) {
                this.setState({
                    input: this.state.input.concat(currentTarget.value)
                });
            }
            // if there are no numbers or 0 start the input from scratch with the button clicked
            else {
                this.setState({
                    input: currentTarget.value
                })
            }
        }
        else if (currentTarget.value === "AC") {
            this.setState({
                input: "0"
            });
        }
        else if (currentTarget.value === "+" || currentTarget.value === "-" || currentTarget.value === "/" || currentTarget.value === "X") {
            this.setState({
                input: currentTarget.value
            })
        }
        else if (currentTarget.value === "."){

            // if input already contains a decimal, do nothing aka, don't add another one
            if (/\.+/.test(this.state.input)) {

            }

            // if the input is numbers add a decimal to it
            else if (/[\d]/.test(this.state.input)) {
                this.setState({
                    input: this.state.input.concat(currentTarget.value)
                });
            }

            // if the input is an operation symbol or blank make the input 0.
            else {
                this.setState({
                    input: "0."
                })
            }
        }
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-md-center align-items-center vh-100"}>
                    <div>
                        <div id={"display-div"}>
                            <div id={"equation-div"}>

                            </div>

                            <div id={"current-input-div"}>
                                {this.state.input}
                            </div>
                        </div>

                        <div id={"buttons-div"} className={"d-flex flex-row flex-wrap"}>
                            {BUTTONS.map((button, i) => (
                                <div id={"div-" + button} key={button + "-div"} className={"button-div"}>
                                    <button id={BUTTONS_FCC[i]} key={button + i} className={"buttons btn btn-dark btn-block"}
                                            value = {button} onClick={this.handleClick}>{button}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class AppWrapper extends React.Component {
    render() {
        return (
            <Calculator />
        );
    }
};

export default AppWrapper;
