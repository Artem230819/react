import React from "react";
import c from "./../Dialogs.module.css";



const Messege = (props) => {
    return (
        <div>
            <div className={c.messege}>{props.messege}</div>

        </div>
    )
}

export default Messege
