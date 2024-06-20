import React from 'react';
import { useParams } from 'react-router-dom';
import logements from "../data/logements.json";
import DropdownBtn from "../components/DropdownBtn";

const logementId = (id)=>{
    return logements.find((logement)=>logement.id === id);
}

const Hebergement = () => {
    const{id} = useParams();
    const logement = logementId(id);
    const imagesLogement = logement.pictures;
    const hostName = logement.host.name;
    const hostPicture = logement.host.picture;
    return (
        <div className='hebergement'>

            
            <div className="pictures">
                {imagesLogement.map((imageLogement,index)=>{
                return (
                    <img className='img-logement' src={imageLogement} alt={imageLogement.title} key={(imageLogement,index)}/>
                )
                })}
            </div>
            <div className='logements-content'>
                <div className='description'>
                    <div className='logement-box'>
                        <p>{logement.title}</p>
                        <p>{logement.location}</p>
                    </div>
                    <div className='host-box'>
                        <p>{hostName}</p>
                        <img src={hostPicture} alt={hostName} /> */
                    </div>
                </div>
                <div className='info-box'>
                    <div className='tags'>tags</div>
                    <div className='rating'>ratings stars</div>
                </div>
                <div className='dropdown-box'>
                    <DropdownBtn title="Description" />
                    <DropdownBtn title="Équipement" />
                </div>
            </div>
            
        </div>
    );
};

export default Hebergement;