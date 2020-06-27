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

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message={postData[0].message} like={postData[0].like}/>
                <Post message={postData[1].message} like={postData[1].like}/>
                <Post message={postData[2].message} like={postData[2].like}/>
                <Post message={postData[3].message} like={postData[3].like}/>
                <Post message={postData[4].message} like={postData[4].like}/>
            </div>
        </div>
    )
}

export default MyPosts;