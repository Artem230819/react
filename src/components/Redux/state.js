

let state ={
    profilePage: {
        postData : [
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
}

let rerender = () =>{

}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        messege: postMessage,
        like: 0
    };
    state.profilePage.postData.push(newPost);
    rerender(state);
}

export const updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerender(state);
}

export const addMessage = (postMessage) =>{
    let newMassege = {
        id: 6,
        messege: postMessage
    }
    state.dialogPage.messegeData.push(newMassege);
    rerender(state);
}

export const updateNewMessegeText = (newText) =>{
    state.dialogPage.newMessegeText = newText;
    rerender(state);
}

export const subscriber = (observer) =>{
    rerender = observer
}


export default state;