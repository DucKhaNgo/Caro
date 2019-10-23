import { connect } from 'react-redux';
import Home from '../components/Home';

import {
    changeAllHistory,
    addCheck,
    changeStepNumber,
    addWin,
    addWasWin,
    toggleSortMove,
    chooseMove,
    toggleXIsNext,
    setXIsNext,
    setSortMoveAsc,
    setIsplay,
    Setposition,
    setSelected
} from '../actions';

const mapStateToProps = state => ({
    history: state.history,
    isPlay: state.isPlay,
    position: state.position,
    selected: state.selected,
    sort: state.sort,
    stepNumber: state.stepNumber,
    winner: state.winner,
    xIsNext: state.xIsNext
});

const mapDispatchToProps = dispatch => ({
    changeAllHistory: history => dispatch(changeAllHistory(history)),
    addCheck: (squares, type, position) =>
        dispatch(addCheck(squares, type, position)),
    changeStepNumber: stepNumber => dispatch(changeStepNumber(stepNumber)),
    addWin: winner => dispatch(addWin(winner)),
    addWasWin: wasWin => dispatch(addWasWin(wasWin)),
    toggleSortMove: () => dispatch(toggleSortMove()),
    setSortMoveAsc: () => dispatch(setSortMoveAsc()),
    chooseMove: step => dispatch(chooseMove(step)),
    toggleXIsNext: () => dispatch(toggleXIsNext()),
    setXIsNext: xIsNext => dispatch(setXIsNext(xIsNext)),
    setIsplay: isplay => dispatch(setIsplay(isplay)),
    Setposition: Position => dispatch(Setposition(Position)),
    setSelected: selected => dispatch(setSelected(selected))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
