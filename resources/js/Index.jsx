import React from 'react';
import Navbar from './components/navbar/Navbar';
import SidebarLeft from './components/sidebarLeft/SidebarLeft';

import '../sass/home.css'

function Index() {
    return (
        <div>
            <Navbar/>
            <div className="home">
                <SidebarLeft/>
                <div className="home__container bg-secondary">
                    <h1 className='fw-bold text-uppercase'>test</h1>
                </div>
                <div className="bg-danger">right</div>
            </div>
            
        </div>
    );
}

export default Index;

