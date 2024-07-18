import React from 'react';

const DressBox = ({ dress }) => {
    return (
        <div className="dress-item">
            <img src={dress.image} alt={dress.name} />
            <h3>{dress.name}</h3>
            <p>{dress.price} INR</p>
        </div>
    );
};

export default DressBox;
