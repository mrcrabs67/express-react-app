import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>

            <MyPosts posts = {props.profilaPage.posts}
                     newPostText = {props.profilaPage.newPostText}
                     addPost = {props.addPost}
                     updateNewPostText = {props.updateNewPostText}/>

        </div>
    )
}

export default Profile;