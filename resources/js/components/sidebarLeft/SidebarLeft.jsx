/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './style.scss';


const SidebarLeft = () => {
  return (
    <div className="sidebarLeft">
        <div className="sidebarLeft__mainLinks">
            <a href="#"><img src="./images/news.png" alt="" width="25" />latest news</a>
            <a href="#"><img src="./images/friends.png" alt="" width="25"/>friends</a>
            <a href="#"><img src="./images/group.png" alt="" width="25"/>group</a>
            <a href="#"><img src="./images/marketplace.png" alt="" width="25"/>marketplace</a>
            <a href="#"><img src="./images/watch.png" alt="" width="25"/>watch</a>
            <a href="#">see more</a>
        </div>

        <div className="sidebarLeft__shortcut-link">
            <p>Your Shortcuts</p>
            <a href="/"><img src="./images/shortcut-1.png" alt="shortcut-1"  width="40"/>web developers</a>
            <a href="/"><img src="./images/shortcut-2.png" alt="shortcut-2"  width="40"/>web design course</a>
            <a href="/"><img src="./images/shortcut-3.png" alt="shortcut-3"  width="40"/>full stack development</a>
            <a href="/"><img src="./images/shortcut-4.png" alt="shortcut-4"  width="40"/>website experts</a>
        </div>
    </div>
  )
}

export default SidebarLeft