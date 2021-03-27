import React from "react";
import Row from "antd/es/row";
import Col from "antd/es/col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faLaptop } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <Row>
        <Col span={12}>
          <a href="mailto:xyz">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
            <span></span>mail to us
          </a>
        </Col>
        <Col span={12}>
          <a
            target="blank"
            href="https://discordapp.com/channels/515951809752465408/515952580103372810"
          >
            <FontAwesomeIcon icon={faLaptop} />
            <span>discordapp.com</span>
          </a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {" "}
          © 2020 Copyright:
          <a target="blank" href="#">
            {" "}
            this website{" "}
          </a>
        </Col>
      </Row>
    </footer>
  );
}
