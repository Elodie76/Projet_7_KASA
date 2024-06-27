import React from 'react';
import { NavLink } from "react-router-dom";

const ErrorHTTP = () => {
    return (
        <div className='errorHTTP'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink 
                to="/" 
                className= "linkErrorPage" >
                <li>Retourner sur la page d'accueil</li>  
            </NavLink>
            
        </div>
    );
};

export default ErrorHTTP;