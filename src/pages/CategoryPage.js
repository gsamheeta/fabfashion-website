import React, { useState, useEffect } from 'react';
import DressList from '../components/DressList';

const CategoryPage = ({ category }) => {
    const [dresses, setDresses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8001/api/dresses/?category=${category}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Debug: Log the fetched data
                setDresses(data);
            })
            .catch(error => console.error('Error fetching dresses:', error));
    }, [category]);

    return (
        <div>
            <h1>{category} Dresses</h1>
            <DressList dresses={dresses} />
        </div>
    );
};

export default CategoryPage;
