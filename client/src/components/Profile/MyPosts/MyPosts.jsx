import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/>)

    let newPostElement = React.createRef();
    const addPost = () => {
        // let text = document.getElementById('new-post').value;
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText('');
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {/*<textarea id = 'new-post'></textarea>*/}
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;