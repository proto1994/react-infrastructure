export const initState = {
    count: 0
};

export const HOME_ADD = "HOME_ADD";
export const HOME_REDUCE = "HOME_REDUCE";

export function addCount() {
    return {
        type: HOME_ADD
    }
}

export function reduceCount() {
    return {
        type: HOME_REDUCE
    }
}


export const reducer = (state=initState, action) => {
    switch (action.type) {
        case HOME_ADD:
            return {
                ...state,
                count: ++state.count
            }
        case HOME_REDUCE:
            return {
                ...state,
                count: --state.count
            }
        default:
            return state;
    }
};

export default reducer;