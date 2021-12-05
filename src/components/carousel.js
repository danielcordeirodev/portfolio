import React from "react";
import { Carousel, Image } from 'react-bootstrap';
import myAvatar from '../my-avatar.png';


const ProjectsCarousel = (props) => {

  const getListOfProjects =
    [
      {
        id: 1,
        title: "task_organizer",
        description: "A simple task organizer for families",
        image: myAvatar
      },
      {
        id: 2,
        title: "web-crawler",
        description: "URL Crawler",
        image: myAvatar
      },
      {
        id: 3,
        title: "crypto_portfolio",
        description: "A simple task organizer for families",
        image: myAvatar
      }
    ];

  const listOfProjects = getListOfProjects.map((project) => {
    return (
      <Carousel.Item>
        <Image
          className="d-block"
          src={project.image}
          alt="First slide"
          width="200" height="200"
          fluid
        />
        <Carousel.Caption>
          <h5>{project.title}</h5>
          <p>{project.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
  );

  return (
    <Carousel variant="dark">
      {listOfProjects}
    </Carousel>)
}

const styles = {
  CarouselItemSize: {
    height: "200px",

  }
}

export default ProjectsCarousel;
