import React from "react";
import studentIMG from '../../assets/students.jpg';
import classes from './Banner.module.scss';
import Note from "../AboutProject/Note";
const Banner: React.FC = () =>{
    return(<div className={classes.Banner}>
    <img src={studentIMG}>
    </img>
        <Note text="test" title="Header"></Note>

    </div>)
}
export default Banner