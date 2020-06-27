import React from "react";
import c from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={c.active} >Sasha</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={c.active}>Artem</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={c.active}>Lena</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={c.active}>Vika</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={c.active}>Gordey</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to="/dialogs/6" activeClassName={c.active}>Ivan</NavLink>
                </div>
            </div>
            <div className="messeges">
                <div className={c.messege}>Hi</div>
                <div className={c.messege}>Hi</div>
                <div className={c.messege}>My name</div>
                <div className={c.messege}>Good</div>
            </div>
        </div>
    )
}
export default Dialogs
