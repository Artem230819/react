import React from "react";
import c from "./../Dialogs.module.css";

const Messege = (props) => {
    return (
        <div className={c.messege}>{props.messege}</div>
    )
}

export default Messege
