import React from 'react';

const DropdownBtn = ({title}) =>  {
    return (
        <button className='dropdownBtn'>
            <p>{title}</p>
            <i class="fa-solid fa-chevron-up"></i>
        </button>
        
    );
};

export default DropdownBtn;