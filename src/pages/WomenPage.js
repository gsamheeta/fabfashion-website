import React, { useState, useEffect } from 'react';
import './CategoryPage.css';  // Ensure you have this CSS file for styling

const WomenPage = () => {
    const [dresses, setDresses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/dresses/?category=Women')  // Ensure this URL is correct
            .then(response => response.json())
            .then(data => setDresses(data))
            .catch(error => console.error('Error fetching women dresses:', error));
    }, []);

    return (
        <div className="category-page">
            <h1>Women</h1>
            <div className="dresses-grid">
                {dresses.map(dress => (
                    <div key={dress.id} className="dress-item">
                        <img src={dress.image} alt={dress.name} />
                        <h3>{dress.name}</h3>
                        <p>{dress.price} INR</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WomenPage;
