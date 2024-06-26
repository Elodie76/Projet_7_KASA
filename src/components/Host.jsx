import React from 'react';

const Host = ({hostName,hostPicture}) => {
    return (
        <div className='host'>
            <p>{hostName}</p>
            <img src={hostPicture} alt={hostName} />
        </div>
    );
};

export default Host;