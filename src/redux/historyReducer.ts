import { Reducer } from "react";
import {ADD_ITEM_TO_HISTORY} from "./types";
import {HistoryType, PayloadAction, RepoListType} from "../interfaces";

const savedData = localStorage.getItem('history');
let parsedData: HistoryType | null = null;
if (typeof savedData === 'string'){
    parsedData = JSON.parse(savedData);
}
const initialState: HistoryType = parsedData || {
    list: []
};

export const historyReducer:Reducer<HistoryType, PayloadAction<string>> = (state = initialState, action: PayloadAction<string>) => {
    switch(action.type){
        case ADD_ITEM_TO_HISTORY:
            const obj = {list: [action.payload, ...state.list]};
            obj.list = obj.list.slice(0, 5);
            localStorage.setItem('history', JSON.stringify(obj));
            return obj;
        default: return state;
    }
}
