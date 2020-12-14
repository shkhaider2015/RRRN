const initState = {
    value : 0
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

export {CounterReducer}