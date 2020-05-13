import React from 'react';

import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <nav className="navContainer">
                <ul>
                    <li>
                        <Link to="/">Hook Component</Link>
                    </li>
                    <li>
                        <Link to="/useEffect">uSeEffect Component</Link>
                    </li>
                    <li>
                        <Link to="/useLocation">useLocation Component</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(Navbar);