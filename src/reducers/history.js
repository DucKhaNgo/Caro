const initialState = [
  {
    squares: Array(20)
      .fill(null)
      .map(() => Array(20).fill(null))
  }
];

const history = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_HISTORY': 
        return [
            ...state,
            {
                squares: action.payload.history
            }
        ];
        case 'Play_Again':
        return initialState
        default:
        return state;
    }
}

export default history;


