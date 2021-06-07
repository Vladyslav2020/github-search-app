import {Action} from "redux";

export interface RepoItemType{
    title: string;
    src: string;
    language: string;
    description: string;
}

export interface RepoListType{
    list: Array<RepoItemType>
}

export interface PayloadAction<T> extends Action{
    payload: T;
}

export interface HistoryType{
    list: Array<string>
}

export interface TimerType{
    timer: number;
}

export interface StateType{
    repoList: RepoListType;
    history: HistoryType;
    timer: TimerType;
}
