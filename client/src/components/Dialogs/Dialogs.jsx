import React from "react";
import d from './Dialogs.module.css'
// import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={d.dialog + ' ' + d.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={d.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Yana'},
        {id: 3, name: 'Vova'},
        {id: 4, name: 'Roma'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Привет'},
        {id: 4, message: 'guten tag'},
    ];

    let dialogsElements = dialogs.map((d) => {
        return <DialogItem name = {d.name} id = {d.id}/>
    });

    let messagesElements = messages.map((m) => {
        return <Message message = {m.message}/>
    });
    

    return (
        <div className={d.dialogs}>
            <div className={d.dialitems}>
                {/*<DialogItem name = {dialogs[0].name} id = {dialogs[0].id}/>*/}

                {/*<DialogItem name = {dialogs[1].name} id = {dialogs[1].id}/>*/}

                {/*<DialogItem name = {dialogs[2].name} id = {dialogs[2].id}/>*/}

                {/*<DialogItem name = {dialogs[3].name} id = {dialogs[3].id}/>*/}
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {/*<Message message = {messages[0].message}/>*/}
                {/*<Message message = {messages[1].message}/>*/}
                {/*<Message message = {messages[2].message}/>*/}
                {/*<Message message = {messages[3].message}/>*/}
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;