import logo from "../../images/sdc_logo_bold.jpg";
import "./Header.css";

const Header = () => (
  <nav>
    <img src={logo} alt="software developers of calgary logo" />
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/tutorial">Tutorial</a>
      </li>
      <li>
        <a href="/events">Events</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="join-us">Join Us</a>
      </li>
    </ul>
    <a href="/login">Login</a>
  </nav>
);

export default Header;
