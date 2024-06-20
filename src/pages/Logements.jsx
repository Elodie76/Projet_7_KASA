import React from 'react';
import { useParams } from 'react-router-dom';
import logements from "../data/logements.json";

const logementId = (id)=>{
    return logements.find((logement)=>logement.id === id);
}

const Hebergement = () => {
    const{id} = useParams();
    const logement = logementId(id);
    const imagesLogement = logement.pictures;
    return (
        <div className='hebergement'>

            <h1>hebergements kasa id: {id}</h1>
            <div className="pictures">
                {imagesLogement.map((imageLogement,index)=>{
                return (
                    <img src={imageLogement} alt={imageLogement.title} key={(imageLogement,index)}/>
                )
                })}
            </div>
            
        </div>
    );
};

export default Hebergement;