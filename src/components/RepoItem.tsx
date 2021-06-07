import React from 'react';
import {RepoItemType} from "../interfaces";

const RepoItem:React.FC<RepoItemType> = (props) => {
    return (
        <div className = 'repo-item'>
            <div className="repo-title">
                <a href = {props.src}>{props.title}</a>
            </div>
            <p>Language: {props.language}</p>
            <p>Description: {props.description}</p>
        </div>
    );
}

export default RepoItem;
