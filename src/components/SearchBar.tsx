import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {prepareRequest} from "../redux/actions";
import {StateType, TimerType} from "../interfaces";

const SearchBar = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const timer = useSelector<StateType, TimerType>(state => state.timer);
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        dispatch(prepareRequest(event.target.value, timer));
    }
    return (
        <input type = 'text'
               className = 'search-bar'
               value = {value}
               onChange = {changeHandler}
        />
    )
}

export default SearchBar;
