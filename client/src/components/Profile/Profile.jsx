import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://greednews.su/wp-content/uploads/2023/09/content-marketing-tools.jpg'
                     title='content'></img>
            </div>
            <div>ava + description</div>
            <div>
                <MyPosts />
            </div>
        </div>
    )
}

export default Profile;