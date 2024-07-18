import React, { useState, useEffect } from 'react';
import './CategoryPage.css';

const MenPage = () => {
    const [dresses, setDresses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/dresses/?category=Men')
            .then(response => response.json())
            .then(data => setDresses(data))
            .catch(error => console.error('Error fetching men dresses:', error));
    }, []);

    return (
        <div className="category-page">
            <h1>Men</h1>
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

export default MenPage;
