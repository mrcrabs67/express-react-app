import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    //debugger;

    return (
                <div className={s.posts}>
                    <div className={s.item}>
                        <img src='https://cdn.dribbble.com/users/1634115/screenshots/10876302/dwight-dribbble.jpg'></img>
                        {props.message}
                        <div>
                            <span>like</span>
                            <span>megalike</span>
                        </div>
                    </div>

                  </div>
    )
}

export default Post;