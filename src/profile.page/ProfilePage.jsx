// import "../profileCss.css";

import "../style.css";

////// img imports////
import background from "./../IMG/Background.png";
import background2 from "./../IMG/Rectangle 20.png";
import ProfilePicture from "./../IMG/Ellipse 15.png";
import Icon from "./../IMG/Component 17.png";
import cameraIcon from "./../IMG/camera.png";
import EditIcon from "./../IMG/pen.png";
import UniversityPicture from "../IMG/Rectangle 29.png";
import UniversityPicture2 from "../IMG/Rectangle 30.png";
import searchIcon from "../IMG/search.png";
import standingIcon from "../IMG/chart-bar-alt.png";
import demograpicIcon from "../IMG/demographic 1.png";
import eyeImg from "../IMG/eye.png";
import signalIcon from "../IMG/signal-stream.png";
import usersIcon from "../IMG/users-alt.png";
import userImg from "../IMG/Ellipse 32.png";
import userImg2 from "../IMG/Ellipse 18.png";
import networkIcon from "../IMG/networking 1.png";
import userImg3 from "../IMG/Ellipse 20.png";
////functions///
import EditBox from "./EditBox";
import Experience from "./Experience";
import MainInformation from "./mainInformation";
import AsideBox from "./asideBox";
import UserCard from "./userCard";
import Header from "../components/Header";
import LittleFooter from "../components/LittleFooter";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <>
    <Header/>
      <div className="background">
        <img className="icon" src={Icon} />
        <img className="ProfilePicture" src={ProfilePicture} />
        <img className="backgroundPic" src={background} />
        <div className="iconsDiv">
          <img src={cameraIcon} />
          <img src={EditIcon} />
        </div>
        <img className="backgroundPic2" src={background2} />
        <div className="info">
          <p>ANZ OILFIELD SERVICES PVT. LTD.</p>
          <div className="infoFlex">
            <h1>Anna Matveichuk</h1>
            <p>Bachelor International Relations and Law</p>
            <h2>Tbilisi, Georgia</h2>
            <h3 className="contact">Contact info</h3>
          </div>
          <div className="editDiv">
            <p>Edit public profile & URL</p>
            <p>Add profile in another language</p>
          </div>
        </div>
        <div className="infoButtom">
          <button className="btn">Open to</button>
          <button className="btn">Add profile section</button>
          <button className="btn">More</button>
        </div>
      </div>
      <div className="section">
        <div className="section1">
          <MainInformation
            DivTop="250px"
            marginLeft="780px"
            text="Main information"
            info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing..."
          />
          <div className="editBoxFlex">
            <EditBox
              marginLeft="100px"
              text="Experience"
              marginTop="20px"
              info1={
                <Experience
                  title="University Teacher"
                  SchoolName="Future Diplomat School"
                  date="Sep 2021- Dec 2022"
                />
              }
              info2={
                <Experience
                  title="Business Owner"
                  SchoolName="Online Shop, Full-time"
                  date="Aug 2019- Oct 2020"
                />
              }
              info3={
                <Experience
                  title="Sales Manager"
                  SchoolName="Online Shop, Full-time"
                  date="Jun 2018- Sep 2019"
                />
              }
            />
            <EditBox
              marginLeft="20px"
              picStyle="50px"
              text="Education"
              gap="60px"
              marginTop="24px"
              img={UniversityPicture}
              img2={UniversityPicture2}
              info1={
                <Experience
                  marginLeft="50px"
                  title="Georgian Technical University"
                  SchoolName="Bachelor of International Relationship and Law"
                  date="Sep 2008- Jun 2019"
                />
              }
              info2={
                <Experience
                  marginLeft="50px"
                  marginTop="80px"
                  title="School #493"
                  SchoolName="Secondary general education"
                  date="Sep 2008- Jun 2019"
                />
              }
            />
          </div>
          <MainInformation
            DivTop="50px"
            WordMoRE="20px"
            showMore="100px"
            marginLeft="780px"
            text="Skills"
            info="
          Russian Language, Georgian Language, English Language, German Language, Microsoft Office, Communication, Attentiveness, Accuracy, Creativity, Critical Thinking, Active Listening, Time Management, and Prioritization..."
          />
          <div className="resources">
            <EditBox
              text="Resources"
              gap="53px"
              eye={eyeImg}
              p="Private to you"
              flex="flex"
              marginTop="10px"
              info1={
                <Experience
                  marginLeft="20px"
                  title="Creator mode "
                  SchoolName="Get discovered, showcase content on your profile, and get access to creator tools"
                />
              }
              info2={
                <Experience
                  marginLeft="20px"
                  title="My network "
                  SchoolName="
            See and manage your connections and interests"
                />
              }
              img={signalIcon}
              img2={networkIcon}
              img3={demograpicIcon}
              info3={
                <Experience
                  marginLeft="20px"
                  title=" Personal demographic information"
                  SchoolName="Add or manage your information"
                />
              }
            />
            <EditBox
              gap="42px"
              text="Analytics"
              eye={eyeImg}
              p="Private to you"
              flex="flex"
              marginTop="30px"
              info1={
                <Experience
                  marginLeft="20px"
                  title="60 profile viewed"
                  SchoolName="Discover who’s viewed your profile"
                />
              }
              info2={
                <Experience
                  marginLeft="20px"
                  title="14 post impressions "
                  SchoolName="
              Check out who’s engaging with your posts"
                />
              }
              img={usersIcon}
              img2={standingIcon}
              img3={searchIcon}
              info3={
                <Experience
                  marginLeft="20px"
                  title=" 20 search appearances"
                  SchoolName="See how often you appear in search results"
                />
              }
            />
          </div>
        </div>
        <div className="section2">
          <AsideBox
            marginTop="100px"
            heading="Open to work"
            p="UI/UX Designer, Copywriter and Sales Manager"
            a="Show details"
            img={EditIcon}
          ></AsideBox>
          <AsideBox
            a="500+ connections"
            fontSize="20px"
            flex="flex"
            height="80px"
            marginTop="10px"
          />
          <AsideBox
            marginTop="10px"
            heading="Activity"
            a2="900 followers"
            p="You haven’t posted yet"
            p2="Post you share will be displayed here"
            create="Create a post"
            border="0.92px solid #1380bb"
            showMore="Show more"
            marginLeft="190px"
            img={EditIcon}
          ></AsideBox>
          <AsideBox
            heading="People you may know "
            marginTop="10px"
            div={
              <UserCard
                ProfilImg={userImg}
                name="Emily Gomer"
                information="Junior Financial Specialist at Diploma"
              />
            }
            div2={
              <UserCard
                ProfilImg={userImg2}
                name="Emily Gomer"
                information="Junior Financial Specialist at Diploma"
              />
            }
            div3={
              <UserCard
                ProfilImg={userImg3}
                name="Emily Gomer"
                showMore="Show more"
                marginLeft="120px"
                information="Junior Financial Specialist at Diploma"
              />
            }
          />
          <AsideBox
            heading="People also viewed"
            marginTop="10px"
            div={
              <UserCard
                ProfilImg={userImg}
                name="Emily Gomer"
                information="Junior Financial Specialist at Diploma"
              />
            }
            div2={
              <UserCard
                ProfilImg={userImg2}
                name="Emily Gomer"
                information="Junior Financial Specialist at Diploma"
              />
            }
            div3={
              <UserCard
                ProfilImg={userImg3}
                name="Emily Gomer"
                showMore="Show more"
                marginLeft="120px"
                information="Junior Financial Specialist at Diploma"
              />
            }
          />
        </div>
      </div>
      <Footer/>
      <LittleFooter/>
    </>
  );
};

export default ProfilePage;
