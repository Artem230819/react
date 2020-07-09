
const ADD_POST = 'ADD-POST';
const UP_DATE_NEW_POST_TEXT = 'UP-DATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UP_DATE_NEW_MESSAGE_TEXT = 'UP-DATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hello", like: 10},
                {id: 2, message: "Hi you hi", like: 12},
                {id: 3, message: "Hi you hi", like: 20},
                {id: 4, message: "Hi you hi", like: 80},
                {id: 5, message: "Hi you hi", like: 1000}
            ],
            newPostText: "it-kamasutra"
        },
        dialogPage: {
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
        }
    },
    _collSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._collSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText='';
            this._collSubscriber(this._state);

        } else if (action.type === 'UP-DATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._collSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {
            let newMassage = {
                id: 6,
                message: this._state.dialogPage.newMessageText
            };
            this._state.dialogPage.messageData.push(newMassage);
            this._state.dialogPage.newMessageText='';
            this._collSubscriber(this._state);

        } else if (action.type === 'UP-DATE-NEW-MESSAGE-TEXT') {
            this._state.dialogPage.newMessageText = action.newText;
            this._collSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () =>{
    return {type: ADD_POST}
}
export const onPostChangeActionCreator = (text) => {
    return  {type: UP_DATE_NEW_POST_TEXT, newText: text}
}

export const addMessageChangeActionCreator = () =>{
    return  {type: ADD_MESSAGE}
}

export const onMessageChangeChangeActionCreator = (text) =>{
    return  {type: UP_DATE_NEW_MESSAGE_TEXT, newText: text}
}











//     addPost ()  {
//
//     },
//     updateNewPostText (newText){
//
//     },
// //     addMessage (){
//         let newMassege = {
//             id: 6,
//             messege: this._state.dialogPage.newMessegeText
//         }
//         this._state.dialogPage.messegeData.push(newMassege);
//         this._collSubscriber(this._state);
// //     },
//     updateNewMessegeText (newText) {
//         this._state.dialogPage.newMessegeText = newText;
//         this._collSubscriber(this._state);
//     }
//
// }







export default store;