import React from 'react';
import c from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



// let postElement = postData.map( p => <Post message={p.message} like={p.like}/>);

const Profile = (props) => {


debugger;
    return (
        <div className={c.content}>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;