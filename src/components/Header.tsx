import React from 'react';

const Header: React.FC = () => {
    return(
        <header className = 'app-header'>
            <div className = 'app-logo'>
                <img src="https://i.ibb.co/ZT4kM84/img.png" alt="img" />
                <div className = "logo-title">
                    <p className = 'title'>Requestum</p>
                    <p className = 'caption'>web development company</p>
                </div>
            </div>
            <div className="app-title">Github users search app</div>
        </header>
    );
}

export default Header;
