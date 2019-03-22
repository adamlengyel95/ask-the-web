import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <div className={classes.Logo}>
                <Link to="/">Ask The Web!</Link>
            </div>
            
            <Link to="/addQuestion" className={classes.AddQuestion_button} >+ Kérdés hozzáadása</Link>
           
            
        </div>
    );
};

export default Navbar;