import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { AuthContext } from '../App';

const NavBar = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setAuth({ token: null, username: null });
        navigate('/');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">Home</Link>
                {auth.token && (
                    <>
                        <Link to="/men">Men</Link>
                        <Link to="/women">Women</Link>
                        <Link to="/kids">Kids</Link>
                    </>
                )}
            </div>
            <div className="navbar-right">
                {auth.token ? (
                    <>
                        <Link to="/profile">Profile</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            {isMenuOpen && (
                <div className="dropdown-menu">
                    {auth.token ? (
                        <>
                            <Link to="/profile" onClick={toggleMenu}>Profile</Link>
                            <button onClick={() => { handleLogout(); toggleMenu(); }}>Logout</button>
                            <Link to="/men" onClick={toggleMenu}>Men</Link>
                            <Link to="/women" onClick={toggleMenu}>Women</Link>
                            <Link to="/kids" onClick={toggleMenu}>Kids</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={toggleMenu}>Login</Link>
                            <Link to="/signup" onClick={toggleMenu}>Signup</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
