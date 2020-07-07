import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Messege from "./Messege/Messege";
import {addPost} from "../Redux/state";




const Dialogs = (props) => {
    let dialogElement = props.state.dialogPage.dialogData.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);

    let newMessegeElement = React.createRef();

    let addMessege = () => {
        let text = newMessegeElement.current.value;
        props.addMessage(text);
        props.updateNewMessegeText("");
    }

    let onMessageChange = () => {
        let text = newMessegeElement.current.value;
        props.updateNewMessegeText(text)
    }

    let messegeElement = props.state.dialogPage.messegeData.map(m => <Messege messege={m.messege}/>)



    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElement}
            </div>
            <div className="messeges">
                {messegeElement}
            </div>
            <div>
            <textarea
                ref={newMessegeElement}
                onChange={onMessageChange}
                value={props.state.dialogPage.newMessegeText}
            ></textarea>
            <button onClick={addMessege}>New messege</button>
            </div>
        </div>
    )
}
export default Dialogs
