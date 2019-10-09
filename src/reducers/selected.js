const initialState = false;

const selected = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED':
    return action.payload.selected
    default:
    return state
    }
}

export default selected;