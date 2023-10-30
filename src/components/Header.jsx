import "./../style.css";
import logo from "./../images/Logo 1.png";
import pfp from "./../images/pfp.png";
const Header = () => {
  return (
    <div className="body flex">
      <header className="flex">
        <img src={logo} alt="logo" className="logo" />
        <nav className="flex">
          <ul className="flex header-ul">
            <li>Home</li>
            <li>My Network</li>
            <li>Jobs</li>
            <li>Messaging</li>
            <li>Notifications</li>
          </ul>
          <img src={pfp} alt="profile picture" className="pfp" />
        </nav>
      </header>
    </div>
  );
};

export default Header;
