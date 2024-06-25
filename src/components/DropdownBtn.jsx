import React from 'react';
import {useState} from "react"

const DropdownBtn = ({title}) =>  {
    const [open, setOpen] =useState(false)
    return (
        <div className='dropdown'>
            <div className={open ?"dropdownBtn dropdown-open" : "dropdownBtn"}>
                <p>{title}</p>
                <i className="fa-solid fa-chevron-up toggle-btn "></i>
            </div>
            <div className='dropdown-content'>
                content
            </div>
        </div>
        
    );
};

export default DropdownBtn;