import "./../style.css";
import logo from "./../images/Logo 1.png";
import pfp from "./../images/pfp.png";
const Header = () => {
  return (
    <div className="body flex2">
      <header className="flex2">
        <img src={logo} alt="logo" className="logo" />
        <nav className="flex2">
          <ul className="flex2 header-ul">
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
