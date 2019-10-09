import { combineReducers } from 'redux';
import history from './history';
import isplay from './isplay';
import position from './position';
import stepNumber from './stepnumber';
import selected from './selected';
import winner from './winner';
import sort from './sort';
import xisNext from './xisnext';

export default combineReducers({
    history,
    isplay,
    position,
    stepNumber,
    selected,
    winner,
    sort,
    xisNext
});
