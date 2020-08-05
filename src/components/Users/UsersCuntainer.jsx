import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching, toggleIsProgress,
    unFollow
} from '../../Redux/usersReducer';
import * as axios from 'axios';
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersCuntainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount / 100);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unFollow}
                toggleIsProgress={this.props.toggleIsProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps= (dispatch) =>{
//     return{
//         follow: (userId) =>{
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) =>{
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users) =>{
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) =>{
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage, setUsersTotalCount, toggleIsFetching,
    toggleIsProgress
})(UsersCuntainer);

// export default UsersContainer;