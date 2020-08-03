export const ADD = 'ADD',
    SUB = 'SUBTRACT',
    MULTIPLY = 'MULTIPLY',
    DIVIDE = 'DIVIDE',
    OP = 'OPERATION',
    EQUALS = 'EQUALS';

// TODO make equals calculate the entire string (equation) and make OP add to the display the current input
const numberReducer = (state = "", action) => {
    switch (action.type) {
        case EQUALS:
            return ""
        case OP:
            return ""
        default:
            return state;
    }
};