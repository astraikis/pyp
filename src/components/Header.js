import React from 'react';

function Header() {
    return (
        <header>
            <div>
                <a href='/' className='header-link'>
                    <i className="fal fa-barcode-read header-icon"></i>
                    <span>pyp</span>
                </a>
            </div>
        </header>
    )
};

export default Header;