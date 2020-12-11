import {combineReducers} from 'redux';
import cityData from './city'
import collectData from './collect'
const rootReducers = combineReducers({
    cityData,
    collectData
});
export default rootReducers