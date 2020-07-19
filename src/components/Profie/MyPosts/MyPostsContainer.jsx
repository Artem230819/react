import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// let postData = [
//     {id: 1, messege: "Hello", like: 10},
//     {id: 2, messege: "Hi you hi", like: 12},
//     {id: 3, messege: "Hi you hi", like: 20},
//     {id: 4, messege: "Hi you hi", like: 80},
//     {id: 5, messege: "Hi you hi", like: 1000}
// ]
//
// let postElement = postData.map( p => <Post message={p.messege} like={p.like}/>);

// const MyPostsContainer = (props) => {
//     debugger;
//
//     let state = props.store;
//
//     let addPost = () => {
//         props.dispatch(addPostActionCreator());
//     }
//     let onPostChange = (text) =>{
//         props.dispatch(onPostChangeActionCreator(text));
//     }
//
//     return(
//         <MyPosts
//             onPostChangeActionCreator={onPostChange}
//             addPost={addPost}
//             postData={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText}
//         />
//     )
// }

let mapStateToProps = (state) =>{
    return {
        postData : state.profilePage.postData,
        newPostText : state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        onPostChangeActionCreator: (text) =>{
            dispatch(onPostChangeActionCreator(text));
        },
        addPost : () =>{
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;