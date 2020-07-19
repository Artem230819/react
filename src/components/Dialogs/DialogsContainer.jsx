import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageChangeActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




// const DialogsContainer = (props) => {
//     let state = props.store;
//
//
//     let addMessage = () => {
//         debugger;
//         props.dispatch(addMessageChangeActionCreator());
//     }
//
//     let onMessageChange = (text) => {
//         props.dispatch(onMessageChangeActionCreator(text));
//     }
//
//
//
//     return (
//         <Dialogs
//             addMessageChangeActionCreator={addMessage}
//             onMessageChangeActionCreator={onMessageChange}
//             state={state}
//             newMessageText={state.dialogPage.newMessageText}
//         />
//     )}
//
    let mapStateToProps = (state) =>{
    return{
        state: state,
        newMessageText: state.dialogPage.newMessageText
    }
    }
    let mapDispatchToProps = (dispatch) =>{
    return{
        addMessageChangeActionCreator: () =>{
            dispatch(addMessageChangeActionCreator());
        },
        onMessageChangeActionCreator: (text) =>{
            dispatch(onMessageChangeActionCreator(text));
        }
    }
    }

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer
