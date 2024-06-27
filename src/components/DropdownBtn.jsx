import React, { useState, useEffect, useRef } from 'react';

const DropdownBtn = ({title, content}) =>  {
    const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`dropdownBtn ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <h3 className='dropdownTitle'>{title}</h3>
        <i className={`fa-solid fa-chevron-${isOpen ? 'down' : 'up'}`}></i>
      </button>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

export default DropdownBtn;