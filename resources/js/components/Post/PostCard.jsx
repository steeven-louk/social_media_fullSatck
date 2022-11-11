import React from "react";

import "./style.scss";

import { Link } from "react-router-dom";

const PostCard = (props) => {

  const {post} = props;


  return (
      <>
          <div className="card">
              <div className="card__user-profile">
                  <Link to="/profile">
                      <img src="./images/profile-pic.png" alt="" />
                  </Link>
                  <div className="card__user-name">
                      <p>John Nicholson</p>
                      <span>June 24 2021, 13:40 pm</span>
                  </div>
              </div>
              <div className="card__body">
                  <p className="card__body__text">
                      {post?.text}
                  </p>
                  <img
                      src="./images/feed-image-1.png"
                      className="card__body__post-media"
                      alt=""
                  />
                  <div className="post-row">
                      <div className="activity-icons">
                          <div>
                          <i className="fa-solid fa-thumbs-up"></i>
                              {" "}
                              120
                          </div>
                          <div>
                          <i className="fa-solid fa-message"></i>
                          {" "}
                              45
                          </div>
                          <div>
                          <i className="fa-solid fa-share"></i>{" "}
                              20
                          </div>
                      </div>
                      <div className="post-profile-icon">
                          <img src="./images/profile-pic.png" alt="profile" />
                          <i className="fas fa-caret-down"></i>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};

export default PostCard;
