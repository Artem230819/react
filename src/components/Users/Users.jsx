import React from "react";
import styles from './users.module.css';
import userPhoto from '../../img/user-avatar.png';
import {unFollow} from "../../Redux/usersReducer";



    const Users = (props) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i=1; i<= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                {pages.map(p=>{
                   return <span className={props.currentPage === p && styles.selectedPage}
                   onClick={ (e) =>{
                       props.onPageChanged(p);
                   }}>{p}</span>
                })}

                {
                    props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                    </div>)
                }
            </div>
        )
}

    export default Users;