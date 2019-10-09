const initialState = true;
const isPlay = (state = initialState, action) => {
    switch (action.type) {
        case 'is_Play':
            return action.payload.isplay
    default: 
    return state
    }
}
export default isPlay;