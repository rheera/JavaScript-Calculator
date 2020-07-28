import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


const defaultState = {
    total: 0,
    equation: "",
    input: ""
};


const BUTTONS = ["AC", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]
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
        this.setState({
            input: currentTarget.id

        });
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
                                <div id={"div-" + button} key={button + i + "-div"} className={"button-div"}>
                                    <button id={BUTTONS_FCC[i]} key={button + i} className={"buttons btn btn-dark btn-block"}
                                            onClick={this.handleClick}>{button}</button>
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
