import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



// let postElement = postData.map( p => <Post message={p.message} like={p.like}/>);

const Profile = (props) => {



    return (
        <div className={c.content}>
            <ProfileInfo />
            <MyPosts
                postData={props.state.profilePage.postData}
                newPostText={props.state.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;