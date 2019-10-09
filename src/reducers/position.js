const initialState = [
    {
        x: 0,
        y: 0
    }
]

const position = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POSITION':
            return [
                ...state,
                {
                    x: action.payload.index,
                    y: action.payload.ind
                }
            ]
            default:
            return state;
    }
}
export default position;