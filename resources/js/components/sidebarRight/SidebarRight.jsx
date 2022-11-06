import React from 'react'

import './style.scss';

export const SidebarRight = () => {
  return (
    <div className="sidebarRight">
      <div className="sidebarRight__title">
        <h4>Events</h4>
        <a href="/">See All</a>
      </div>

      <div className="event">
        <div className="event__left">
          <h3>18</h3>
          <span>March</span>
        </div>

        <div className="event__right">
            <h4>social media</h4>
            <p><i className="fas fa-map-marker-alt"></i> willson tech park</p>
            <a href="/">more info</a>
        </div>
      </div>

      <div className="event">
        <div className="event__left">
          <h3>22</h3>
          <span>June</span>
        </div>
        
        <div className="event__right">
            <h4>Mobile Marketing</h4>
            <p><i className="fas fa-map-marker-alt"></i>willson tech park</p>
            <a href="/">more info</a>
        </div>
      </div>
<br />
      <div className="sidebarRight__title">
        <h4>Advertisement</h4>
        <a href="/">close</a>
      </div>
      <img src="./images/advertisement.png" className='sidebar-ads' alt="" />

      <div className="sidebarRight__title">
        <h4>Conversation</h4>
        <a href="/">Hide Chat</a>
      </div>

      <div className="online-list">
        <div className="online">
         <img src="./images/member-1.png" alt="" />
        </div>
        <p>Alison Mina</p>
      </div>
      <div className="online-list">
        <div className="online">
         <img src="./images/member-2.png" alt="" />
        </div>
        <p>Jackson Aston</p>
      </div>
      <div className="online-list">
        <div className="online">
         <img src="./images/member-3.png" alt="" />
        </div>
        <p>Samona Rose</p>
      </div>



    </div>
  )
}
