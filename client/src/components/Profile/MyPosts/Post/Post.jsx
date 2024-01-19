import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
                <div className={s.posts}>
                    <div className={s.item}>
                        <img src='https://cdn.dribbble.com/users/1634115/screenshots/10876302/dwight-dribbble.jpg'></img>
                        post1
                        <div>
                            <span>like</span>
                            <span>megalike</span>
                        </div>
                    </div>

                  </div>
    )
}

export default Post;