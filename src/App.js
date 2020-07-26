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

const BUTTONS = ["AC", "/", "X", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "0", ".", "="]

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

                    <div id={"buttons-div"} className={"d-flex"}>
                        {BUTTONS.map((button, i) => (
                            <button id={button} key={button + i} className={"buttons flex-row flex-wrap"}>{button}</button>
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
