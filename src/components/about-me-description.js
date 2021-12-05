import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiUpwork, SiLinkedin, SiGithub, SiItchdotio } from 'react-icons/si';

const AboutMeDescription = (props) => {

  return (
    <Row className="justify-content-lg-center" style={{ ...styles.marginTop }}>
      <Col lg="3"></Col>
      <Col lg="3">
        <h5>About me</h5>
        <p style={{ ...styles.textColor }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit felis nec mi consectetur, a tincidunt est mattis. Mauris consectetur nisl vel ullamcorper porttitor. Nulla eu metus sem. Aenean lacinia, nisl rutrum rhoncus porttitor, urna tortor placerat dui, vel tristique nibh quam eu purus. Suspendisse lacus lorem, porta et odio vel, accumsan vestibulum nunc. Ut tincidunt suscipit urna eget auctor. Suspendisse in consectetur lacus.
        </p>
      </Col>
      <Col lg="3">
        <h5>Contact </h5>
        <Row>
          <Col lg="1">
            <SiUpwork />
          </Col>
          <Col lg="auto">
            <a href="https://www.upwork.com/freelancers/~012c7a2c3a1a24e44b">
              https://www.upwork.com/freelancers/~012c7a2c3a1a24e44b
            </a>
          </Col>
        </Row>

        <Row>
          <Col lg="1">
            <SiLinkedin />
          </Col>
          <Col lg="auto">
            <a href="https://www.linkedin.com/in/danieldcordeiro">
              https://www.linkedin.com/in/danieldcordeiro
            </a>
          </Col>
        </Row>

        <Row>
          <Col lg="1">
            <SiGithub />
          </Col>
          <Col lg="auto">
            <a href="https://github.com/danielcordeirodev">
              https://github.com/danielcordeirodev
            </a>
          </Col>
        </Row>

        <Row>
          <Col lg="1">
            <SiItchdotio />
          </Col>
          <Col lg="auto">
            <a href="https://daniel-cordeiro.itch.io">
              https://daniel-cordeiro.itch.io
            </a>
          </Col>
        </Row>
      </Col>
      <Col lg="3"></Col>
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
