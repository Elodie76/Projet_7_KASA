import React from 'react';
import Proptypes from"prop-types";
import{Link} from "react-router-dom";

const Thumb = ({logements}) => {
    return (
        logements.map((logement)=>(
            <Link to={`/logement/${logement.id}`} className='thumb' key={logement.id}>
                <img src={logement.cover} alt={logement.title} />
                <h3 className='thumbTitle'>{logement.title}</h3>
            </Link>
        ))
        
    );
};
Thumb.prototype ={
    logements: Proptypes.array.isRequired
}
export default Thumb;