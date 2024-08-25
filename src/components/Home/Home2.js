import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
               I am passionate about programming and have learned skills in various areas.
              <br />
              <br />I am familiar with technologies such as
              <i>
                <b className="purple"> CSS, JavaScript, React.js, Next.js, Angular, Spring Boot, and MongoDB. </b>
              </i>
              <br />
              <br />
              <b className="purple"> My interests include :</b> 
              <i>
                <p>Creating innovative web solutions and building dynamic, user-friendly applications. I enjoy taking on complex challenges and am excited to apply my knowledge to real-world projects that make a meaningful impact.</p>
              </i>
              <br />
              
              Whenever possible, I apply my passion for developing products with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> Modern Javascript Library and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wafaabek"
                  target="_blank" /*le lien s'ouvre dans un nouvel onglet*/
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wafaa-bekkhoucha-535bb1319/"
                  target="_blank"/*le lien s'ouvre dans un nouvel onglet*/
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
