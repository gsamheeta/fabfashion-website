import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
        <h1 className="welcome-message">
                <span className="welcome">WELCOME</span> to <span className="fabfashion">FabFashion</span>
            </h1>
            <h1>Shop Now</h1>
            <p>Discover the latest trends in fashion</p>
            <div className="categories">
                <div className="category">
                    <img src="/images/menWP.png" alt="Men's Fashion" />
                    <h2>Men</h2>
                    <Link to="/men">Shop Men</Link>
                </div>
                <div className="category">
                    <img src="/images/womenwp.jpeg" alt="Women's Fashion" />
                    <h2>Women</h2>
                    <Link to="/women">Shop Women</Link>
                </div>
                <div className="category">
                    <img src="/images/kids.png" alt="Kids' Fashion" />
                    <h2>Kids</h2>
                    <Link to="/kids">Shop Kids</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
