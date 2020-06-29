import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";

let postData = [
    {id: 1, messege: "Hello", like: 10},
    {id: 2, messege: "Hi you hi", like: 12},
    {id: 3, messege: "Hi you hi", like: 20},
    {id: 4, messege: "Hi you hi", like: 80},
    {id: 5, messege: "Hi you hi", like: 1000}
]

let postElement = postData.map( p => <Post message={p.messege} like={p.like}/>);

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;