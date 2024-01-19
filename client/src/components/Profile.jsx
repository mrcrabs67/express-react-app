import React from 'react';
import s from  './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://greednews.su/wp-content/uploads/2023/09/content-marketing-tools.jpg'
                     title='content'></img>
            </div>
            <div>ava + description</div>
            <div>
                My posts
                <div>New post</div>
                <div className={s.posts}>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                    <div className={s.item}>post3</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;