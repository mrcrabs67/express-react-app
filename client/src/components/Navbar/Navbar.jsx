import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.item}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>Message</div>
            <div className={classes.item}>News</div>
            <div className={classes.item}>Music</div>
            <div className={classes.item}>Settings</div>
        </nav>
    )
}

export default Navbar;