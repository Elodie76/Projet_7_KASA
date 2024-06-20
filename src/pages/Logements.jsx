import React from 'react';
import { useParams } from 'react-router-dom';
import logements from "../data/logements.json";
import DropdownBtn from "../components/DropdownBtn";
import Tag from '../components/Tag';

const logementId = (id)=>{
    return logements.find((logement)=>logement.id === id);
}

const Logements = () => {
    const{id} = useParams();
    const logement = logementId(id);
    const imagesLogement = logement.pictures;
    const hostName = logement.host.name;
    const hostPicture = logement.host.picture;
    return (
        <div className='logements'>

            
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
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className='host-box'>
                        <p>{hostName}</p>
                        <img src={hostPicture} alt={hostName} />
                    </div>
                </div>
                <div className='info-box'>
                    <div className='tags'>
                        <Tag />
                    </div>
                    <div className='rating'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className='dropdown-box'>
                    <DropdownBtn className='dropdown-btn' title="Description" />
                    <DropdownBtn className='dropdown-btn'title="Équipement" />
                </div>
            </div>
            
        </div>
    );
};

export default Logements;