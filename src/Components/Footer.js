import React from "react";
import Row from "antd/es/row";
import Col from "antd/es/col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faLaptop } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <a target="blank" href="https://discord.gg/t9r5VufW3d">
        <FontAwesomeIcon icon={faLaptop} />
        <span>Discord Community</span>
      </a>
      <div>
        <span>© 2020 Copyright</span>
        <a target="blank" href="https://sdc.fyi">
          Software Developers of Calgary
        </a>
      </div>
    </footer>
  );
}
