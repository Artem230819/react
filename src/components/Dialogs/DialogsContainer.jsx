import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageChangeActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";




const DialogsContainer = (props) => {
    let state = props.store;
    

    let addMessage = () => {
        debugger;
        props.dispatch(addMessageChangeActionCreator());
    }

    let onMessageChange = (text) => {
        props.dispatch(onMessageChangeActionCreator(text));
    }



    return (<Dialogs
            addMessageChangeActionCreator={addMessage}
            onMessageChangeActionCreator={onMessageChange}
            state={state}
            newMessageText={state.dialogPage.newMessageText}
        />
    )}
export default DialogsContainer
