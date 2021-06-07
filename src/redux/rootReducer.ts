import {combineReducers} from 'redux';
import {repoListReducer} from "./repoListReducer";
import {historyReducer} from "./historyReducer";
import {timerReducer} from "./timerReducer";

export const rootReducer = combineReducers({repoList: repoListReducer, history: historyReducer, timer: timerReducer});
