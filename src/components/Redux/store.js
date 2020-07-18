import profileReducer from "../../Redux/profileReducer";
import dialogReducer from "../../Redux/dialogReducer";


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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._collSubscriber(this._state);
    }
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