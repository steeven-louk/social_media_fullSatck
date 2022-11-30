import React, { useState } from 'react'
// import {Link} from 'react-router-dom';

import './style.scss';


const Navbar = (props) => {

    const [isToggle, setIsToggle] = useState(true);
    const {theme, setTheme} = props

  return (
       <>
         <nav className='navbar'>
            <a href="/">
              <img src="./images/logo.png"  className="navbar__left__logo" alt="logo" />
            </a>

            <div className="navbar__left">
                <ul>
                    <li><img src="./images/notification.png" alt="" /></li>
                    <li><img src="./images/inbox.png" alt="" /></li>
                    <li><img src="./images/video.png" alt="" /></li>
                </ul>
            </div>
            <div className="navbar__right">
                <div className="navbar__right__search">
                    <img src="./images/search.png" alt="" />
                    <input type="text" className='form-control' placeholder='Search' />
                </div>
                <div className="navbar__right__user" onClick={()=>setIsToggle(!isToggle)}>
                    <div className="online">
                    <img src="./images/profile-pic.png" alt="profile" />
                    </div>
                </div>
            </div>

            <div className={isToggle ? "navbar__settings-menu" : "navbar__settings-menu navbar__settings-menu-display"}>
               <div className="settings-menu-inner">
               <div className="user-profile">
                    <img src="./images/profile-pic.png" alt="" />
                    <div className="user-name">
                      <p className="text-capitalize">{props?.username}</p>
                        <a href="/profile">
                          <span>See Your Profile</span>
                        </a>
                    </div>
                    <div className="toggleTheme" onClick={()=> setTheme(theme)}>
                     <i className="fa fa-sun icoToggle icoLight"></i>
                    </div>

                </div>

                    <hr />

                  <div className="user-profile">
                    <img src="./images/feedback.png" alt="" />
                    <div className="user-name">
                      <p>Give Feedback</p>
                       <a href="/">Help us to improve the new design</a>
                    </div>
                  </div>

                  <hr />

                  <div className="setting-links">
                    <img src="./images/setting.png" className='settings-icon' alt="" />
                    <a href="/">Settings & Privacy <img src="./images/arrow.png" width="10px" alt="" /></a>
                  </div>

                  <div className="setting-links">
                    <img src="./images/help.png" className='settings-icon' alt="" />
                    <a href="/">Help & Support <img src="./images/arrow.png" width="10px" alt="" /></a>
                  </div>

                  <div className="setting-links">
                    <img src="./images/display.png" className='settings-icon' alt="" />
                    <a href="/">Display & Accessibility<img src="./images/arrow.png" width="10px" alt="" /></a>
                  </div>

                  <div className="setting-links">
                    <img src="./images/logout.png" className='settings-icon' alt="" />
                    <a href="/">logout <img src="./images/arrow.png" width="10px" alt="" /></a>
                  </div>
               </div>
            </div>
        </nav>

       </>
  )
}

export default Navbar