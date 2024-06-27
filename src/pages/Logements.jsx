import React from 'react';
import { useParams } from 'react-router-dom';
import logements from "../data/logements.json";
import DropdownBtn from "../components/DropdownBtn";
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Slider from '../components/Slider';
import Host from '../components/Host';

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
    const description =logement.description;
    const equipments =logement.equipments;
    
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
                    <Host hostName={hostName} hostPicture={hostPicture} />
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
                    <div className='rating-mobile'>
                       <Rating rating={logement.rating} /> 
                       <div className='host-box-mobile'>
                        <Host hostName={hostName} hostPicture={hostPicture} />
                    </div>
                    </div>                   
                </div>
                <div className='dropdown-box'>
                    <DropdownBtn 
                        className='dropdown-btn' 
                        title="Description"
                        content={
                            <ul>
                                {description}
                            </ul>
                        } />
                    <DropdownBtn 
                        className='dropdown-btn' 
                        title="Équipements"
                        content={
                            <ul>
                                {equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>
                        } />
                </div>
            </div>
            
        </div>
    );
};

export default Logements;