import React from "react";
import dialogs from './Dialogs.module.css'
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialitems}>
                <div className={dialogs.dialog + ' ' + dialogs.active}>
                    <NavLink to="/dialogs/1">Viktor</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/2">Viktor</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/3">Viktor</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/4">Viktor</NavLink>
                </div>
            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>Hi</div>
                <div className={dialogs.message}>Hello</div>
                <div className={dialogs.message}>Привет</div>
            </div>
        </div>
    )
}

export default Dialogs;