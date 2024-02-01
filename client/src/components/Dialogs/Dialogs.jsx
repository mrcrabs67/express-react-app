import React from "react";
import dialogs from './Dialogs.module.css'
// import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={dialogs.dialog + ' ' + dialogs.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={dialogs.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Yana'},
        {id: 3, name: 'Vova'},
        {id: 4, name: 'Roma'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Привет'},
        {id: 4, message: 'guten tag'},
    ];

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialitems}>
                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>

                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>

                <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id}/>

                <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id}/>
            </div>
            <div className={dialogs.messages}>
                <Message message = {messagesData[0].message}/>
                <Message message = {messagesData[1].message}/>
                <Message message = {messagesData[2].message}/>
                <Message message = {messagesData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs;