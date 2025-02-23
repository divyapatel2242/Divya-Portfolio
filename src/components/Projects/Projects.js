import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Cube from "../../Assets/Projects/Cube-Manage.png";

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
              imgPath={Cube}
              isBlog={false}
              title="Cube-Manage"
              description="Comprehensive product and customer management tool with enhanced searching and analytics capabilities. Interactive dashboards leveraging Elasticsearch for real-time insights and visualizations, includ-
ing warehouse-level reports. Predictive analytics module using Spark MLlib to project inventory needs and optimize stock management"
              ghLink="https://github.com/divyapatel2242/Cube-Manager"
            />
          </Col>
          {/*  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
