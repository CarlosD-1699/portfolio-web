import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon4 from "../../assets/img/nav-icon4.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center w-100">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/carlos-daniel-barbosa-950420275">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="mailto:carlos.dbarbosa0716@gmail.com">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
