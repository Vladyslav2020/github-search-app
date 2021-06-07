import React from 'react';
import {RepoItemType, StateType} from "../interfaces";
import RepoItem from "./RepoItem";
import {useSelector} from "react-redux";

const ReposList:React.FC = () => {
    const repoList = useSelector<StateType, Array<RepoItemType>>((state: StateType) => state.repoList.list)
    const list = repoList.map(item =>
        <RepoItem title = {item.title}
                  key = {item.title}
                  src = {item.src}
                  language = {item.language}
                  description = {item.description}
        />
    );
    return (
        <div className = 'repo-list'>
            {list.length == 0 &&
            <div style = {{fontSize: '20px', color: 'white', fontWeight: 'bold', marginTop: '5px'}}>No results</div>}
            {list}
        </div>
    );
}

export default ReposList;
