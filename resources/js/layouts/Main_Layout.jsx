import React from "react";

import Navbar from "../components/navbar/Navbar";
import SidebarLeft from "../components/sidebarLeft/SidebarLeft";
import { SidebarRight } from "../components/sidebarRight/SidebarRight";

import Home from "../views/Home";

import "./style.scss";

const Main_Layout = () => {
    return (
        <>
            <Navbar />

            <div className="home d-flex justify-content-between">
                <SidebarLeft />
                <Home />
                <SidebarRight />
            </div>
        </>
    );
};

export default Main_Layout;
