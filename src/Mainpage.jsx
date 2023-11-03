import "./style.css";


import { addDoc, collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { auth, db } from "./firebaseconfiguration.js";
import { useState,useEffect } from "react";
import { updateProfile } from "firebase/auth";




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
import Header from "./components/Header";

const MainPage = () => {


  const [postInput, setPostInput] = useState("");

  const [posts, setPosts] = useState([]);




  const savePost = async () => {
    if (postInput.trim() === "") {
      return; 
    }
  
    try {
    
      const post = {
        content: postInput,
       date:Date.now()
      };
  
      const docRef = await addDoc(collection(db, "posts"), post);
  
      setPostInput("");
  
      
    } catch (error) {
      console.error("Error saving post: ", error);
    }
  }

  const user = auth.currentUser;
  const displayName = user ? user.displayName : "Guest";


  updateProfile(auth.currentUser, {
    displayName: "Anna Matveichuk", 
  }).then(() => {
 
  }).catch((error) => {
  
  });

  
useEffect(() => {
 
  const getPosts = async () => {
  
    const postsCollection = collection(db, "posts");
    const querySnapshot = await getDocs(postsCollection);

    const postsData = [];
    querySnapshot.forEach((doc) => {
      postsData.push(doc.data());
    });

    setPosts(postsData);
  };

  getPosts();
}, []);


  const navigate = useNavigate()
  const gotoProfile = ()=>{
    navigate("/profilepage")
  }
  return (
  
   
    <div className="main-page">
      <Header/>
      <div className="container flex gap">
        <div className="profile-div">
          <img
            src={profileBackground}
            alt="background"
            className="background"
          />
          <div className="options">
            <img
             onClick={gotoProfile}
              src={pfp}
              alt="profilepicture"
              className="div-profile-picture"
            />
            <p className="name">{displayName}</p>
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
              onClick={gotoProfile}
                src={pfp}
                alt="profilepicture"
                className="publish-post-pfp"
              />
            </div>
            <div className="postinputs flex">
              <div className="flex gap5">
                <input
                  type="text"
                  className="post-input"
                  placeholder="Post something..."
                  value={postInput}
                  onChange={(e) => setPostInput(e.target.value)}
                />
               <button className="gray-button" onClick={savePost}>Post</button>
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
  {posts.map((post, index) => (
    <div className="posts-box" key={index}>
      <p className="post-caption">{post.content}</p>
      {/* Add other post details here */}
    </div>
  ))}
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