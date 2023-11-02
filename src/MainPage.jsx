import "./style.css";
import {  useNavigate } from 'react-router-dom';
import profileBackground from "./images/Background.png";
import pfp from "./images/pfp.png";
import photopost from "./images/addPhoto.png";
import videopost from "./images/addVideo.png";
import eventpost from "./images/addEvent.png";
import articlepost from "./images/addWriteArticlePhoto.png";
import postpic from "./images/postpic.png";
import commentIcon from "./images/comenticon.png";
import Users from "./components/Users";
import removebutton from "./images/removebutton.png";
import morebutton from "./images/morebutton.png";

const MainPage = () => {
  
  return (
    <div className="main-page">
      <div className="container flex gap">
        <div className="profile-div">
          <img
            src={profileBackground}
            alt="background"
            className="background"
          />
          <div className="options">
            <img
              src={pfp}
              alt="profilepicture"
              className="div-profile-picture"
            />
            <p className="name">Anna Matveichuk</p>
            <ul className="black-p">
              <li>Who’s viewed your profile</li>
              <li>Impressions of your post</li>
              <li>My items</li>
              <li>Invitations</li>
              <li>Groups</li>
              <li>Events</li>
              <li>Followed Hashtags</li>
            </ul>
          </div>
        </div>
        <div className="posts-div flex">
          <div className="publish-post flex">
            <div>
              <img
                src={pfp}
                alt="profile-picture"
                className="publish-post-pfp"
              />
            </div>
            <div className="postinputs flex">
              <div className="flex gap5">
                <input
                  type="text"
                  className="post-input"
                  placeholder="Post something..."
                />
                <button className="gray-button">post</button>
              </div>

              <div className="align-items-center flex gap10">
                <img
                  src={photopost}
                  alt="picture"
                  className="publish-post-icons"
                />
                <p>Photo</p>

                <img
                  src={videopost}
                  alt="video"
                  className="publish-post-icons"
                />
                <p>Video</p>

                <img
                  src={eventpost}
                  alt="event"
                  className="publish-post-icons"
                />
                <p>Event</p>

                <img
                  src={articlepost}
                  alt="artcle"
                  className="publish-post-icons"
                />
                <p>Write article</p>
              </div>
            </div>
          </div>
          <div className="posts">
            <div className="posts-box">
              <div className="owner-of-posts flex">
                <img src={pfp} alt="pfp" className="publish-post-pfp" />
                <div className="width100">
                  <p className="postersName">Anthony J Jackson</p>
                  <p className="location-p">lokacia</p>
                  <p className="time">5 d</p>
                </div>
                <div className="button-divs width100 gap10">
                  <div className="flex gap10 button-divs end bottompad10px">
                    <img src={removebutton} /> <img src={morebutton} />
                  </div>

                  <button className="gray-button">+ Follow</button>
                </div>
              </div>
            </div>
            <p className="post-caption">
              Smart innovation in Taiwan - Gogoro technology electric scooter
              battery swap solutions make urban sustainability possible.
            </p>
            <div className="comment-section">
              <img src={postpic} alt="picture" className="posted-pic" />
              <p className="comment-number font-size-12px">80 comments</p>
              <div className="flex center gap">
                <img src={commentIcon} className="commenticon" />
                <p className="font-size-12px">comment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="friends-div posts">
          <p className="postersName">Add to your feed</p>
          <Users />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
