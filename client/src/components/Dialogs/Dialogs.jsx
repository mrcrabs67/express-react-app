import React from "react";
import dialogs from './Dialogs.module.css'
import Navbar from "../Navbar/Navbar";
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
    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialitems}>
                <DialogItem name = "Viktor" id = "1"/>

                <DialogItem name = "Yana" id = "2"/>

                <DialogItem name = "Vova" id = "3"/>

                <DialogItem name = "Roma" id = "4"/>
            </div>
            <div className={dialogs.messages}>
                <Message message = "Hi"/>
                <Message message = "Hello"/>
                <Message message = "Привет"/>
            </div>
        </div>
    )
}

export default Dialogs;