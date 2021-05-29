import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faLaptop } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="mailto:xyz">
          <FontAwesomeIcon icon={faEnvelopeSquare} />
          <span>Send us an email</span>
        </a>
        <a
          target="blank"
          href="https://discordapp.com/channels/515951809752465408/515952580103372810"
        >
          <FontAwesomeIcon icon={faLaptop} />
          <span>discordapp.com</span>
        </a>
      </div>
      <span> ©2021 Copyright</span>
    </footer>
  );
}
