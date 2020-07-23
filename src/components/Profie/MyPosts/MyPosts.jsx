import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";


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


    let postElement = props.postData.map( p => <Post message={p.message} key={p.id} like={p.like}/>);




    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (e) =>{
        let text = e.target.value;
        props.onPostChangeActionCreator(text);
    }

    return (
        <div>
            My post
            <div>
                <textarea onChange={onPostChange}  value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={c.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;