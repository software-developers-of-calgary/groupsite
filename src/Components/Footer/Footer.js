import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faLaptop } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <a target="blank" href="https://discord.gg/t9r5VufW3d">
        <FontAwesomeIcon icon={faLaptop} />
        <span>Discord Community</span>
      </a>
      <div>
        <span>Made with care by the</span>
        <a target="blank" href="https://sdc.fyi">
          Software Developers of Calgary
        </a>
        <span>team</span>
      </div>
    </footer>
  );
};

export default Footer;
