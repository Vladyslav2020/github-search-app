import { Reducer } from "react";
import {SET_TIMER} from "./types";
import {PayloadAction, TimerType} from "../interfaces";

const initialState: TimerType = {
    timer: 0
};

export const timerReducer:Reducer<TimerType, PayloadAction<number>> = (state = initialState, action: PayloadAction<number>) => {
    switch(action.type){
        case SET_TIMER: return {timer: action.payload}
        default: return state;
    }
}
