import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiUpwork, SiLinkedin, SiGithub, SiItchdotio } from 'react-icons/si';

const AboutMeDescription = (props) => {

  return (
    <Row className="justify-content-lg-center" style={{ ...styles.marginTop }}>
      <Col lg="1"></Col>
      <Col lg="5">
        <h5>About me</h5>
        <p style={{ ...styles.textColor }}>
          I am a Junior software engineer with 2 degrees in Computer Science and 2 years of professional experience with the ability to develop back-end applications with some front-end. I study daily to improve my software knowledge and I like to develop projects from scratch to be able to improve any part of it and give my best ideas. My favorite development methodology is KANBAN and the one containing CI/CD and TDD, for me, it's an art. When I write code I do my best to keep it clean and as efficient as possible, like Michael Feathers said "Clean code always looks like it was written by someone who cares".        </p>
      </Col>
      <Col lg="5">
        <h5>Contact </h5>
        <Row>
          <Col lg="1">
            <SiUpwork />
          </Col>
          <Col lg="auto">
            <a target="_blank" href="https://www.upwork.com/freelancers/~012c7a2c3a1a24e44b">
              https://www.upwork.com/freelancers/~012c7a2c3a1a24e44b
            </a>
          </Col>
        </Row>

        <Row>
          <Col lg="1">
            <SiLinkedin />
          </Col>
          <Col lg="auto">
            <a target="_blank" href="https://www.linkedin.com/in/danieldcordeiro">
              https://www.linkedin.com/in/danieldcordeiro
            </a>
          </Col>
        </Row>

        <Row>
          <Col lg="1">
            <SiGithub />
          </Col>
          <Col lg="auto">
            <a target="_blank" href="https://github.com/danielcordeirodev">
              https://github.com/danielcordeirodev
            </a>
          </Col>
        </Row>

        <Row>
          <Col lg="1">
            <SiItchdotio />
          </Col>
          <Col lg="auto">
            <a target="_blank" href="https://daniel-cordeiro.itch.io">
              https://daniel-cordeiro.itch.io
            </a>
          </Col>
        </Row>
      </Col>
      <Col lg="1"></Col>
    </Row >
  );
}

const styles = {
  marginTop: {
    marginTop: '70px'
  },
  textColor: {
    color: "grey"
  }
};

export default AboutMeDescription
