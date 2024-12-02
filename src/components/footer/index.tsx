import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <a
              href="https://github.com/basitk41"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github text-light"></i>
            </a>
            <span className="mx-2">© 2024 AuthEase</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
