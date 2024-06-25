import React from 'react';
import { useParams } from 'react-router-dom';
import logements from "../data/logements.json";
import DropdownBtn from "../components/DropdownBtn";
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Slider from '../components/Slider';

const logementId = (id)=>{
    return logements.find((logement)=>logement.id === id);
}

const Logements = () => {
    const{id} = useParams();
    const logement = logementId(id);
    const pictures = logement.pictures;
    const hostName = logement.host.name;
    const hostPicture = logement.host.picture;
    const tags =logement.tags;
    return (
        <div className='logements'>        
            
                    <Slider pictures={pictures} />              
            
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
                        {tags.map((tag,index)=>{
                        return (
                        <Tag title={tag} key={(tag,index)} />                     
                        )
                        })}
                    </div>                    
                    <Rating rating={logement.rating} />
                    
                 
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