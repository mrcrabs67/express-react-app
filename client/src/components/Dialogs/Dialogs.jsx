import React from "react";
import d from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map((d) => {
        return <DialogsItem name = {d.name} id = {d.id}/>
    });

    let messagesElements = props.messages.map((m) => {
        return <Message message = {m.message}/>
    });


    return (
        <div className={d.dialogs}>
            <div className={d.dialitems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;