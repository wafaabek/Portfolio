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
              description="Daresni is a platform for managing online extra courses and language learning.
              As a member of the multidisciplinary Daresni project team, I developed frontend services using Next.js and backend services using Spring Boot. The platform was built with a microservices architecture using Kafka and REST APIs for communication. I was also responsible for the backend of the payment service, utilizing MongoDB for database management. "
             /* demoLink="https://chatify-49.web.app/"*/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student_valley}
              isBlog={false}
              title="Student Valley"
              description="The project Student Valley  involves implementing a platform for project management called  « un diplôme-une startup/ un diplôme - un brevet »
             - Member of the front-end team, using React.js. "
              /*ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"*/
            />
          </Col>

         

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
