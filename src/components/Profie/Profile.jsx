import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


// let postElement = postData.map( p => <Post message={p.messege} like={p.like}/>);

const Profile = (props) => {



    return (
        <div className={c.content}>
            <ProfileInfo />
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;