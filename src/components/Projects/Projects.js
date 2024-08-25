import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import daresni from "../../Assets/Projects/daresni.png";
import student_valley from "../../Assets/Projects/student_valley.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daresni}
              isBlog={false}
              title="Daresni"
              description="The project DARESNI is an online learning platform dedicated to supplementary lessons by providing an online space where teachers and students (middle and high school)."
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student_valley}
              isBlog={false}
              title="Student Valley"
              description="The project Student Valley  involves implementing a platform for project management called  « un diplôme-une startup/ un diplôme - un brevet » "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

         

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
