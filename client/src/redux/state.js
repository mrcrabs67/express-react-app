import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: "It's my second post", likesCount: 11},
            {id: 2, message: "Blabla", likesCount: 5},
            {id: 2, message: "gagaga", likesCount: 4},
            {id: 2, message: "ajaja", likesCount: 7},
        ],
        newPostText: '',
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Привет'},
            {id: 4, message: 'guten tag'},
        ],
        dialogs: [
            {id: 1, name: 'Viktor'},
            {id: 2, name: 'Yana'},
            {id: 3, name: 'Vova'},
            {id: 4, name: 'Roma'},
        ]
    }
};


export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;