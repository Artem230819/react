import React from "react";
import c from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={c.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    )
}

const Messege = (props) => {
    return (
        <div className={c.messege}>{props.messege}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <Dialog name="Sasha" id="1"/>
                <Dialog name="Artem" id="2"/>
                <Dialog name="Lena" id="3"/>
                <Dialog name="Vika" id="4"/>
                <Dialog name="Gordey" id="5"/>
                <Dialog name="Ivan" id="6"/>
            </div>
            <div className="messeges">
                <Messege messege="Hi"/>
                <Messege messege="My name"/>
                <Messege messege="Good"/>
                <Messege messege="Good"/>
                <Messege messege="Good"/>
            </div>
        </div>
    )
}
export default Dialogs
