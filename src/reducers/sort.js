const initialSate = false;
const sort = (state = initialSate, action) => {
    switch (action) {
        case 'TOGGLE_MOVE_SORT':
        return !state;
        default: 
        return state;
    }
}
export default sort;