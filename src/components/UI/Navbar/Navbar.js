import React from 'react';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <div className={classes.Logo}>
                <a href="#home">Ask The Web!</a>
            </div>
            
            <a className={classes.Login_button} href="#news">+ Kérdés hozzáadása</a>
           
            
        </div>
    );
};

export default Navbar;