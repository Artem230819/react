const ADD_MESSAGE = 'ADD-MESSAGE';
const UP_DATE_NEW_MESSAGE_TEXT = 'UP-DATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) =>{
    switch (action.type) {
        case ADD_MESSAGE:
            let newMassage = {
                id: 6,
                message: state.newMessageText
            };
            state.messageData.push(newMassage);
            state.newMessageText='';
            return state;
        case UP_DATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addMessageChangeActionCreator = () =>{
    return  {type: ADD_MESSAGE}
}

export const onMessageChangeActionCreator = (text) =>{
    return  {type: UP_DATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogReducer;