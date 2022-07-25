import React from "react";
import classes from "./Note.module.scss";

type Information = {
    title:string,
    date?:Date,
    text:string,
}
const Note: React.FC<Information> = (props) => {
    return (<div className={classes.aboutProject}>
        <header>
        <h2>{props.title}</h2>

        </header>
        <p>{props.text}</p>
    </div>)
}
export default Note