import React from 'react';
import Header from "./Header";
import RepoItem from "./RepoItem";
import SearchBar from "./SearchBar";
import ReposList from "./ReposList";
import History from "./History";

const App: React.FC = () => {
    return (
        <div className = 'app'>
            <Header />
            <div className = 'app-body'>
                <div className = 'side-bar'>
                    <SearchBar />
                    <History />
                </div>
                <ReposList />
            </div>
        </div>
    );
}

export default App;
