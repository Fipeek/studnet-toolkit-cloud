import React from 'react';
import classes from './Nav.module.scss';
import { Link } from "react-router-dom";
const Nav: React.FC = () =>{
    return(
    <nav className={classes.nav}>
        <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Tasks'>Tasks</Link></li>
        <li><Link to='/Pomodoro'>Pomodoro</Link></li>
        <li><Link to='/Cloud'>Cloud</Link></li>
        </ul>
    </nav>)
}
export default Nav;