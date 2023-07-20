import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce",
      description: "Desarrollo",
      imgUrl: projImg1,
      link: "https://github.com/CarlosD-1699/React-ECommerce",
    },
    {
      title: "Portafolio",
      description: "Diseño y Desarrollo",
      imgUrl: projImg2,
      link: "https://github.com/CarlosD-1699/portfolio-starter",
    },
    {
      title: "Aplicación de Gastos",
      description: "Desarrollo",
      imgUrl: projImg3,
      link: "https://github.com/CarlosD-1699/react-expense-tracker",
    },
  ];

  return (
    <section className="project" id="proyectos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Proyectos</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reiciendis accusamus deleniti cum quibusdam laboriosam
                    accusantium blanditiis esse voluptas reprehenderit iure
                  </p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
