import { Reducer } from "react";
import {SET_REPO_LIST} from "./types";
import {PayloadAction, RepoItemType, RepoListType} from "../interfaces";

const initialState: RepoListType = {
    list: []
};

export const repoListReducer:Reducer<RepoListType, PayloadAction<RepoListType>> = (state = initialState, action: PayloadAction<RepoListType>) => {
    switch(action.type){
        case SET_REPO_LIST: return {...state, list: [...action.payload.list]};
        default: return state;
    }
}
