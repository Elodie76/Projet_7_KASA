import React from 'react';

const Tag = ({title}) => {
    return (
        <div className='tag'>
            <p className='tag-name'>{title}</p>
        </div>
    );
};

export default Tag;