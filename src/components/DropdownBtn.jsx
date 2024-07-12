import React, { useState, useEffect, useRef } from 'react';

const DropdownBtn = ({title, content}) =>  {
const [isOpen, setIsOpen] = useState(false);
const [isAnimating, setIsAnimating] = useState(false);
const dropdownRef = useRef(null);

const toggleDropdown = () => {
  if (isOpen) {
    setIsAnimating(true);
    setIsOpen(false);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
     // Durée de l'animation de fermeture
  } else {
    setIsOpen(true);
  }
};

//*Getion de fermeture du drop down sur un click externe*

// const handleClickOutside = (event) => {
//   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setIsOpen(false);
//       setIsAnimating(false);
//     }, 400); // Durée de l'animation de fermeture
//   }
// };

// useEffect(() => {
//   document.addEventListener('mousedown', handleClickOutside);
//   return () => {
//     document.removeEventListener('mousedown', handleClickOutside);
//   };
// }, []);

return (
  <div className={`dropdownBtn ${isOpen ? 'open' : '' }`} ref={dropdownRef}>
    <button className="dropdown-button" onClick={toggleDropdown}>
      <h3 className='dropdownTitle'>{title}</h3>
      <i className={`fa-solid fa-chevron-${isOpen ? 'up rotate--open ' : 'up rotate--close'}`}></i>
    </button>
    <div 
      className={`dropdown-content ${isOpen ? 'content--open' : 'content--close'}`}>
      {content}
    </div>
  </div>
);
};

export default DropdownBtn;