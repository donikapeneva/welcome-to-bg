import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    
    return (
        <header className="header-style header-layout">
            <div className="menu-button-layout" onClick={() => setMenuOpen(!isMenuOpen)}>
                <div className="menu-icon">
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                </div>
            </div>
            <h1 className="title">The Plan</h1>
            <div></div>
        {/* Here you would include the overlay or side menu that is displayed when isMenuOpen is true */}
        </header>
    );
};

export default Header;