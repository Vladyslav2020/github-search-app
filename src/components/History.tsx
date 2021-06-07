import React from 'react';
import {useSelector} from "react-redux";
import {HistoryType, StateType} from "../interfaces";

const History = () => {
    const history = useSelector<StateType, HistoryType>(state => state.history);
    const list = history.list.map((item, index) => <div key = {index} className = 'history-item'>{item}</div>)
    return (
        <div className = 'history'>
            <div className = 'history-title'>
                Search history:
            </div>
            {list}
        </div>
    );
}

export default History;
