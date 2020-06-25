import React from 'react';
import c from "./Profile.module.css"

const Profile = () => {
    return(
        <div className={c.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/get-pdb/1527424/0c479c5b-07f5-4d43-b510-5701ced5e534/s1200?webp=false" alt=""/>
            </div>
            <div>ava + desc</div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={c.ports}>
                    <div className={c.item}>post 1</div>
                    <div className={c.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;