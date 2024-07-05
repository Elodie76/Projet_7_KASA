import React, { useState} from 'react';
import DropContent from "./DropContent";
import Fade from "./DropContent";

const DropdownV2 = () => {
    const [open, setOpen] = useState(true)

    const toggle = () => setOpen(o => !o)
    return (
        <div>
            <button onClick={toggle}>Afficher/masquer</button>
            <Fade visible={open}>
                <DropContent />    
            </Fade>
            
        </div>
    );
};

export default DropdownV2;