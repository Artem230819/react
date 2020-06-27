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

let dialogData = [
    {id: 1, name: "Sasha"},
    {id: 2, name: "Artem"},
    {id: 3, name: "Lena"},
    {id: 4, name: "Vika"},
    {id: 5, name: "Gordey"},
    {id: 6, name: "Ivan"}
]
let messegeData = [
    {id: 1, messege: "Hi"},
    {id: 2, messege: "My name"},
    {id: 3, messege: "Good"},
    {id: 4, messege: "Good"},
    {id: 5, messege: "Good"}
]

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <Dialog name={dialogData[0].name} id={dialogData[0].id}/>
                <Dialog name={dialogData[1].name} id={dialogData[1].id}/>
                <Dialog name={dialogData[2].name} id={dialogData[2].id}/>
                <Dialog name={dialogData[3].name} id={dialogData[3].id}/>
                <Dialog name={dialogData[4].name} id={dialogData[4].id}/>
                <Dialog name={dialogData[5].name} id={dialogData[5].id}/>
            </div>
            <div className="messeges">
                <Messege messege={messegeData[0].messege}/>
                <Messege messege={messegeData[1].messege}/>
                <Messege messege={messegeData[2].messege}/>
                <Messege messege={messegeData[3].messege}/>
                <Messege messege={messegeData[4].messege}/>
            </div>
        </div>
    )
}
export default Dialogs
