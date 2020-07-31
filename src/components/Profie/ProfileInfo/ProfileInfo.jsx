import React from 'react';
import c from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/get-pdb/1527424/0c479c5b-07f5-4d43-b510-5701ced5e534/s1200?webp=false"
                    alt=""/>
            </div>
            <div className={c.descriptionBlok}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;