import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


const defaultState = {
    total: 0,
    equation: "",
    currentInput: ""
};

const ADD = () => {
    return {
        total: 0
    }
}

const BUTTONS = ["AC", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick({currentTarget}) {
        this.setState({
            currentInput: ""

        });
        document.getElementById(currentTarget.id[0]).play();
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-md-center align-items-center vh-100"}>
                    <div id={"display-div"}>
                    </div>

                    <div id={"buttons-div"} className={"d-flex flex-row flex-wrap"}>
                        {BUTTONS.map((button, i) => (
                            <div id={"div-" + button} key={button + i + "-div"} className={"button-div"}>
                                <button id={"button-" + button} key={button + i} className={"buttons btn btn-dark btn-block"}>{button}</button>
                            </div>
                        ))}
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
