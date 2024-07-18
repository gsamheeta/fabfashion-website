import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const AuthContext = React.createContext();

const App = () => {
    const [auth, setAuth] = useState({ token: null, username: null });

    useEffect(() => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        if (token && username) {
            setAuth({ token, username });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <Router>
                <NavBar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/profile" element={auth.token ? <Profile /> : <Navigate to="/login" />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/men" element={auth.token ? <MenPage /> : <Navigate to="/login" />} />
                        <Route path="/women" element={auth.token ? <WomenPage /> : <Navigate to="/login" />} />
                        <Route path="/kids" element={auth.token ? <KidsPage /> : <Navigate to="/login" />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
