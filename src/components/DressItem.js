import React from 'react';

const DressItem = ({ dress }) => {
    return (
        <div className="category">
            <h3>{dress.name}</h3>
            <p>{dress.description}</p>
            <img src={dress.image} alt={dress.name} />
        </div>
    );
};

export default DressItem;
