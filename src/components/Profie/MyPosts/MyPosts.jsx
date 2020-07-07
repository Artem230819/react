import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPost} from "../../Redux/state";


// let postData = [
//     {id: 1, messege: "Hello", like: 10},
//     {id: 2, messege: "Hi you hi", like: 12},
//     {id: 3, messege: "Hi you hi", like: 20},
//     {id: 4, messege: "Hi you hi", like: 80},
//     {id: 5, messege: "Hi you hi", like: 1000}
// ]
//
// let postElement = postData.map( p => <Post message={p.messege} like={p.like}/>);

const MyPosts = (props) => {

    let postElement = props.postData.map( p => <Post messege={p.messege} like={p.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText("");
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            My post
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={c.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;