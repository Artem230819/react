import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



// let postElement = postData.map( p => <Post message={p.messege} like={p.like}/>);

const Profile = (props) => {



    return (
        <div className={c.content}>
            <ProfileInfo />
            <MyPosts postData={props.state.profilePage.postData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;