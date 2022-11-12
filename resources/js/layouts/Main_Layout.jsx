import React from "react";

import Navbar from "../components/navbar/Navbar";
import SidebarLeft from "../components/sidebarLeft/SidebarLeft";
import { SidebarRight } from "../components/sidebarRight/SidebarRight";
 
import Home from "../views/Home";

import "./style.scss";

const Main_Layout = () => {

    const id = JSON.parse(localStorage.getItem('id'));
    const username = JSON.parse(localStorage.getItem('username'));
    const slug = JSON.parse(localStorage.getItem('slug'));

    return (
        <>
            <Navbar username={username}/>

            <div className="home d-flex justify-content-between">
                <SidebarLeft />
                <Home id={id} username={username} slug={slug} />
                <SidebarRight />
            </div>
        </>
    );
};

export default Main_Layout;
