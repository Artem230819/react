


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, messege: "Hello", like: 10},
                {id: 2, messege: "Hi you hi", like: 12},
                {id: 3, messege: "Hi you hi", like: 20},
                {id: 4, messege: "Hi you hi", like: 80},
                {id: 5, messege: "Hi you hi", like: 1000}
            ],
            newPostText: "it-kamasutra"
        },
        dialogPage: {
            messegeData: [
                {id: 1, messege: "Hi"},
                {id: 2, messege: "My name"},
                {id: 3, messege: "Good"},
                {id: 4, messege: "Good"},
                {id: 5, messege: "Good"}
            ],
            dialogData: [
                {id: 1, name: "Sasha", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
                {id: 2, name: "Artem", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
                {id: 3, name: "Lena", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
                {id: 4, name: "Vika", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
                {id: 5, name: "Gordey", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"},
                {id: 6, name: "Ivan", img: "https://bumper-stickers.ru/48643-thickbox_default/panda-v-ochkah.jpg"}
            ],
            newMessegeText: "it-kamasutra"
        }
    },
    getState(){
      return this._state;
    },
    _collSubscriber () {
    },
    addPost ()  {
        let newPost = {
            id: 5,
            messege: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._collSubscriber(this._state);
    },
    updateNewPostText (newText){
        this._state.profilePage.newPostText = newText;
        this._collSubscriber(this._state);
    },
    addMessage (postMessage){
        let newMassege = {
            id: 6,
            messege: this._state.dialogPage.newMessegeText
        }
        this._state.dialogPage.messegeData.push(newMassege);
        this._collSubscriber(this._state);
    },
    updateNewMessegeText (newText) {
        this._state.dialogPage.newMessegeText = newText;
        this._collSubscriber(this._state);
    },
    subscriber (observer){
        this._collSubscriber = observer;
    }
}







export default store;