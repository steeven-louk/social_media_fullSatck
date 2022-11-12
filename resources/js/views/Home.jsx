import React, { useState } from "react";
import PostCard from "../components/Post/PostCard";
import { Story_gallery } from "../components/story/Story-gallery";

import "./styles/home.scss";

const Home = (props) => {
    const getPost = JSON.parse(localStorage.getItem("post"));

    const [post, setPost] = useState(getPost);

    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    console.log(props)
    const { id, slug, username } = props;


    const handleSubmit = (e) => {
        e.preventDefault();

        let id = 0;
        let getId = id++;

        setPost([
            ...post,
            {
                text: input,
                id: getId,
                image: "",
            },
        ]);

        localStorage.setItem("post", JSON.stringify(post));
        setInput("");
    };

    return (
        <div>
            <div className="home__container">
                <Story_gallery />

                <div className="write-post-container">
                    <form onSubmit={handleSubmit}>
                        <div className="user-profile">
                            <a href="/profile">
                                <img src="./images/profile-pic.png" alt="" />
                            </a>
                            <div className="user-name">
                                <p className="text-capitalize">{username}</p>
                                <small>
                                    Public <i className="fas fa-caret-down"></i>{" "}
                                </small>
                            </div>
                        </div>

                        <div className="post-input-container">
                            <textarea
                                rows="3"
                                placeholder={`What's on your mind, ${username}?`}
                                value={input}
                                onChange={(e) =>
                                    setInput(e.target.value)
                                }
                            ></textarea>
                            {/* {error && error} */}
                            <div className="add-post-links">
                                <a href="/">
                                    <img
                                        src="./images/live-video.png"
                                        alt="video"
                                    />{" "}
                                    Live Video
                                </a>
                                <label htmlFor="media">
                                    <img src="./images/photo.png" alt="video" />{" "}
                                    Photo/Video
                                </label>
                                <input
                                    type="file"
                                    onChange={() => {}}
                                    id="media"
                                    className="d-none"
                                />
                                <a href="/">
                                    <img
                                        src="./images/feeling.png"
                                        alt="video"
                                    />{" "}
                                    Feeling/Activity
                                </a>
                            </div>
                            <input
                                className="btn btn-success mt-2"
                                type="submit"
                                value="submit"
                            />
                        </div>
                    </form>

                    <div className="post__container">
                        {post?.map((item, index) => (
                            <PostCard post={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
