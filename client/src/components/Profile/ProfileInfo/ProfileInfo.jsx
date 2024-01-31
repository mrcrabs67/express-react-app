import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://greednews.su/wp-content/uploads/2023/09/content-marketing-tools.jpg'
                     title='content'></img>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;