import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New post
            </div>
            <div className={c.posts}>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;