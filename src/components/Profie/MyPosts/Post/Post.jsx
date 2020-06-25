import React from 'react';
import c from "./Post.module.css"

const Post = (a) => {
    return (
        <div className={c.item}>
            <img src="https://cdn.dribbble.com/users/1225071/screenshots/3194288/samurai-logo-01.png" alt=""/>
            {a.message}
            <div>
                <span>like = {a.like}</span>
            </div>
        </div>
    )
}

export default Post;