import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Slider = ({pictures}) => {
    const [slide, setSlide] = useState(0);

    // const nextSlide = () => {
    //     setSlide(slide === pictures.length -1 ? 0 : slide + 1);
    // };
    // const prevSlide = () => {
    //     setSlide(slide === 0 ? pictures.length -1 : slide - 1);
    // };
    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='carousel'>
            {pictures.length > 1 && (
                <FontAwesomeIcon icon={faChevronLeft} 
                    className='arrow chevron-left'  
                    onClick={prevSlide} 
                />
            )}                
                    
            {pictures.map((picture,index)=>{
                return (            
                    <img 
                        src={picture} 
                        alt={"slider"} 
                        key={index} 
                        className={slide === index ? "picture" : "picture picture-hidden"}
                    /> 
                );
            })}
            {pictures.length > 1 && (
                <FontAwesomeIcon icon={faChevronRight}
                    className='arrow chevron-right' 
                    onClick={nextSlide} 
                />
            )}
            {pictures.length > 1 && (
                <span className='indicator'>
                    <p className='indicator-style'>{slide + 1}/{pictures.length}</p>
                </span>   
            )}                
        </div>
    );
};
export default Slider;