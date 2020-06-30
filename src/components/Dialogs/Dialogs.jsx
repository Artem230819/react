import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messege from "./Messege/Messege";


let dialogData = [
    {id: 1, name: "Sasha"},
    {id: 2, name: "Artem"},
    {id: 3, name: "Lena"},
    {id: 4, name: "Vika"},
    {id: 5, name: "Gordey"},
    {id: 6, name: "Ivan"}
]

let dialogElement = dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);

let messegeData = [
    {id: 1, messege: "Hi"},
    {id: 2, messege: "My name"},
    {id: 3, messege: "Good"},
    {id: 4, messege: "Good"},
    {id: 5, messege: "Good"}
]

let messegeElement = messegeData.map(m => <Messege messege={m.messege}/>)

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElement}
            </div>
            <div className="messeges">
                {messegeElement}
            </div>
        </div>
    )
}
export default Dialogs
