import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import SidebarLeft from './components/sidebarLeft/SidebarLeft';

import { SidebarRight } from './components/sidebarRight/SidebarRight';

import '../sass/index.scss';
import Home from './views/Home';
import Login from './views/auth/Login';
import Register from './views/auth/Register';


function Index() {


    const [post, setPost] = useState([]);
    const [selectFile, setSelectFile] = useState();
  
    const [input, setInput] = useState('');
    const [error, setError] = useState('');



    return (
        <div>
            {/* <Navbar />
            <div className="home d-flex justify-content-between">
                <SidebarLeft />
                <Home/>
                <SidebarRight />
            </div> */}
            {/* <Login/> */}
            <Register/>

        </div>
    );
}

export default Index;

