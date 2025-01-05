import React from "react";
import { useState } from "react";
import "./Sidebar.css"
import {SidebarData} from "./SidebarData"

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`Sidebar ${isHovered ? "expanded" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ul className="SidebarList">
                <li className="row1">
                    <div className="logo">
                            <img src="src\assets\Logo.png" alt="DaguConnect Logo" />
                    </div>
                    <div className={'logo_title ${isHovered ? "show" : ""}'}>
                        <h1>DaguConnect</h1>
                    </div>
                </li>
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key}
                         className="row" 
                         id={window.location.pathname == val.link ? "active" : ""}
                         onClick={() => { window.location.pathname = val.link }}>
                            <div className="icon">{val.icon}</div>
                            <div className={`title ${isHovered ? "show" : ""}`}>{val.title}</div>
                        </li>
                    );
                })}
                
            </ul>
        </div>
    );
}
export default  Sidebar