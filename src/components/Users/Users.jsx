import React from "react";
import styles from './users.module.css';

let Users = (props) =>{
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg',
                    followed: false,
                    fullName: 'Artem',
                    status: 'I am a boss',
                    location: {city: 'Saransk', country: 'Russia'}
                },
                {
                    id: 2, photoUrl: 'https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg',
                    followed: true, fullName: 'Artem', status: 'I am a boss', location: {city: 'Saransk', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg',
                    followed: false,
                    fullName: 'Artem',
                    status: 'I am a boss',
                    location: {city: 'Saransk', country: 'Russia'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u=> <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                        <div>
                            {u.followed
                                ? <button onClick={ () =>{props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={ () =>{props.follow(u.id)}}>Follow</button>}

                        </div>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>)
        }
    </div>
}

export default Users;