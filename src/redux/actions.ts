import {
    ADD_ITEM_TO_HISTORY,
    SET_REPO_LIST, SET_TIME_OF_LAST_INPUT, SET_TIMER
} from "./types"
import {ActionCreator, AnyAction, Dispatch} from "redux";
import {PayloadAction, RepoListType, TimerType} from "../interfaces";

export const setRepoList: ActionCreator<PayloadAction<RepoListType>> = (data: RepoListType) => {
    return {
        type: SET_REPO_LIST,
        payload: {
            list: data.list
        }
    };
}

export const addItemToHistory = (data: string) => {
    return {
        type: ADD_ITEM_TO_HISTORY,
        payload: data
    }
}

export const setTimeOfLastInput = (time: number) => {
    return {
        type: SET_TIME_OF_LAST_INPUT,
        payload: time
    }
}

export const setTimer = (timer: number) => {
    return {
        type: SET_TIMER,
        payload: timer
    }
}

export const prepareRequest = (searchValue: string, timer: TimerType) => {
    return (dispatch: Dispatch<AnyAction>) => {
        clearTimeout(timer.timer);
        if (!searchValue)
            return;
        // @ts-ignore
        let newTimer = setTimeout(() => dispatch(searchGithubUser(searchValue)), 500);
        // @ts-ignore
        dispatch(setTimer(newTimer));
    }
}

interface ResponseDataItemType{
    name: string;
    language: string;
    description: string;
    html_url: string;
}

export const searchGithubUser = (name: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            dispatch(addItemToHistory(name));
            let response = await fetch(`https://api.github.com/search/users?q=${name}&per_page=1`);
            let data = await response.json();
            response = await fetch(data.items[0].repos_url);
            data = await response.json();
            const repos = data.map((item: ResponseDataItemType) => ({title: item.name, language: item.language, description: item.description, src: item.html_url}));
            dispatch(setRepoList({list: repos}));
        } catch (err) {
            console.log("Error:", err.message);
        }
    }
}
