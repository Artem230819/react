import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageChangeActionCreator, onMessageChangeChangeActionCreator} from "../Redux/state";




const Dialogs = (props) => {
    let dialogElement = props.state.dialogPage.dialogData.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);

    let newMessageElement = React.createRef();




    let addMessage = () => {
        debugger;
        props.dispatch(addMessageChangeActionCreator());
    }

    let onMessageChange = () => {
        debugger;
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeChangeActionCreator(text));
    }

    let messageElement = props.state.dialogPage.messageData.map(m => <Message message={m.message}/>)



    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElement}
            </div>
            <div className="messages">
                {messageElement}
            </div>
            <div>
            <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}/>
            <button onClick={addMessage}>New message</button>
            </div>
        </div>
    )
}
export default Dialogs
