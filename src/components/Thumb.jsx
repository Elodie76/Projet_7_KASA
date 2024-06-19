import React from 'react';
import Proptypes from"prop-types";

const Thumb = ({logements}) => {
    return (
        logements.map((logements)=>(
            <div className='thumb' key={logements.id}>
                <img src={logements.cover} alt={logements.title} />
                <h3>{logements.title}</h3>
            </div>
        ))
        
    );
};
Thumb.prototype ={
    logements: Proptypes.array.isRequired
}
export default Thumb;