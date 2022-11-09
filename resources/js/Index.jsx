import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import SidebarLeft from './components/sidebarLeft/SidebarLeft';

import { SidebarRight } from './components/sidebarRight/SidebarRight';

import '../sass/index.scss';
import Home from './views/Home';


function Index() {


    const [post, setPost] = useState([]);
    const [selectFile, setSelectFile] = useState();
  
    const [input, setInput] = useState('');
    const [error, setError] = useState('');



    return (
        <div>
            <Navbar />
            <div className="home d-flex justify-content-between">
                <SidebarLeft />
                <Home/>
                <SidebarRight />
            </div>
        </div>
    );
}

export default Index;

