import { combineReducers } from "redux";

const initState = {
    value : 0,
    anotherValue : 1,
    items : [],
    loading : false,
    error : null
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

const ProductReducer = (state = initState, action) =>
{
    switch(action.type)
    {
        case 'FETCH_PRODUCT_BEGIN':
            return{
                ...state,
                loading : true,
                error : null
            };
        case 'FETCH_PRODUC_SUCCESS':
            return{
                ...state,
                loading : false,
                items : action.payload.products
            };
        case 'FETCH_PRODUCT_FAILURE':
            return{
                ...state,
                loading : false,
                error : action.payload.error,
                items : [],
            };
        default:
            return state
    }
}

const Reducers = combineReducers({
    counter : CounterReducer,
    multiple : FiveMultipleReducer,
    products : ProductReducer,
});

export {Reducers}