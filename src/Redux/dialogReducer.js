const ADD_MESSAGE = 'ADD-MESSAGE';
const UP_DATE_NEW_MESSAGE_TEXT = 'UP-DATE-NEW-MESSAGE-TEXT';

let initialState = {
    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "My name"},
        {id: 3, message: "Good"},
        {id: 4, message: "Good"},
        {id: 5, message: "Good"}
    ],
    dialogData: [
        {id: 1, name: "Sasha", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
        {id: 2, name: "Artem", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
        {id: 3, name: "Lena", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
        {id: 4, name: "Vika", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
        {id: 5, name: "Gordey", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
        {id: 6, name: "Ivan", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"}
    ],
    newMessageText: "it-kamasutra"
};

const dialogReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMassage = {
                id: 6,
                message: state.newMessageText
            };

            let stateCopy = {...state};

            stateCopy.messageData=[...state.messageData];
            stateCopy.messageData.push(newMassage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UP_DATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
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