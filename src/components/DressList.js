import React from 'react';
import DressItem from './DressItem';

const DressList = ({ dresses }) => {
    return (
        <div>
            {dresses.map(dress => (
                <DressItem key={dress.id} dress={dress} />
            ))}
        </div>
    );
};

export default DressList;
