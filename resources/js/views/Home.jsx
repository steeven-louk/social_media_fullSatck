import React, { useState } from 'react'
import { Story_gallery } from '../components/story/Story-gallery';

import './styles/home.scss'

const Home = () => {

    const [post, setPost] = useState([]);
    const [selectFile, setSelectFile] = useState();
  
    const [input, setInput] = useState('');
    const [error, setError] = useState('');



  return (
    <div>
        
        <div className="home__container">

                <Story_gallery/>
                    
                <div className="write-post-container">
                  <form  onSubmit={()=> {}} method="POST">

                  <div className="user-profile">
                    <a href="/profile">
                      <img src="./images/profile-pic.png" alt="" />
                    </a>
                    <div className="user-name">
                      <p>John Nicholson</p>
                      <small>Public <i className="fas fa-caret-down"></i> </small>
                    </div>
                  </div>

                  <div className="post-input-container">
                    <textarea rows="3" placeholder="What's on your mind, John?" value={input} onChange={(e)=> setInput(e.target.value.toLowerCase())}></textarea>
                      {error && error}
                    <div className="add-post-links">
                      <a href="/"><img src="./images/live-video.png" alt="video" /> Live Video</a>
                      <label htmlFor='media'><img src="./images/photo.png" alt="video" /> Photo/Video</label>
                      <input type="file"  onChange={()=>{}} id="media" className='d-none' />
                      <a href="/"><img src="./images/feeling.png" alt="video" /> Feeling/Activity</a>
                    </div>
                    <input className='btn btn-success mt-2' type='submit' value='submit'/>
                  </div>

                  </form>
                </div>
                </div>
    </div>
  )
}

export default Home