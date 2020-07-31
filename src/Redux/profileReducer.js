const ADD_POST = 'ADD-POST';
const UP_DATE_NEW_POST_TEXT = 'UP-DATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    postData: [
        {id: 1, message: "Hello", like: 10},
        {id: 2, message: "Hi you hi", like: 12},
        {id: 3, message: "Hi you hi", like: 20},
        {id: 4, message: "Hi you hi", like: 80},
        {id: 5, message: "Hi you hi", like: 1000}
    ],
    newPostText: "it-kamasutra",
    profile: null
};


const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };

            let stateCopy = {...state};

            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UP_DATE_NEW_POST_TEXT: {

            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USERS_PROFILE : {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () =>{
    return {type: ADD_POST}
}
export const onPostChangeActionCreator = (text) => {
    return  {type: UP_DATE_NEW_POST_TEXT, newText: text}
}
export const setUserProfile = (profile) => {
    return  {type: SET_USERS_PROFILE, profile}
}

export default profileReducer;