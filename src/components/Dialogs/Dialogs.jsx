import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messege from "./Messege/Messege";





const Dialogs = (props) => {

    let dialogElement = props.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);



    let messegeElement = props.messegeData.map(m => <Messege messege={m.messege}/>)

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
