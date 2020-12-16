import { combineReducers } from "redux";

const initState = {
    value : 0,
    anotherValue : 1,
};

const CounterReducer = (state=initState, action) =>
{
    console.log("Reach", action.type)
    switch(action.type)
    {
        case "INCREMENT":
            return{
                ...state,
                value : state.value + 1
            }
        case "DECREMENT":
                return{
                    ...state,
                    value : state.value - 1
                }
        default:
            return state
    }
}
const FiveMultipleReducer = (state=initState, action) =>
{
    console.log("Reach Multiple", action.type)
    switch(action.type)
    {
        case "MULTIPLY":
            return{
                ...state,
                anotherValue : state.anotherValue * 5
            }
        case "DEVIDE":
                return{
                    ...state,
                    anotherValue : state.anotherValue / 5
                }
        default:
            return state
    }
}

const Reducers = combineReducers({
    counter : CounterReducer,
    multiple : FiveMultipleReducer,
});

export {Reducers}