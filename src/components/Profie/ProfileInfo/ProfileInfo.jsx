import React from 'react';
import c from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/get-pdb/1527424/0c479c5b-07f5-4d43-b510-5701ced5e534/s1200?webp=false"
                    alt=""/>
            </div>
            <div className={c.descriptionBlok}>ava + desc</div>
        </div>
    )
}

export default ProfileInfo;