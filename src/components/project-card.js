import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = (props) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.project.image} />
      <Card.Body>
        <Card.Title>{props.project.title}</Card.Title>
        <Card.Text>
          {props.project.description}
        </Card.Text>
        <Button variant="primary" onChange={props.project.visitPress}>Take a look</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard
