import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { SiUpwork, SiLinkedin, SiGithub, SiItchdotio } from 'react-icons/si';

const AboutMeWorkExperience = (props) => {

  return (
    <Row className="justify-content-lg-center" style={{ ...styles.marginTop }}>
      <Col lg="1"></Col>
      <Col lg="5">
        <h5>Work experience</h5>
        <p style={{ ...styles.textColor }}>
          <Badge style={{ ...styles.badges }} bg="primary">C#</Badge>
          <Badge style={{ ...styles.badges }} bg="primary">SQL</Badge>
          <strong>Technical Consultant at VTXRM - Software factory </strong> - 2020 to 2021
        </p>
        <p style={{ ...styles.textColor }}>
          <Badge style={{ ...styles.badges }} bg="primary">Swift</Badge>
          <Badge style={{ ...styles.badges }} bg="primary">Java</Badge>
          <strong>Mobile developer at NTW - Web Technology </strong> - 2019 to 2020
        </p>
      </Col>
      <Col lg="5">
        <h5>Education</h5>
        <p style={{ ...styles.textColor }}>
          <strong>B.Sc.in Computer Science, Polytechnic Institute of Setúbal, Setúbal </strong> - 2019 to 2021
        </p>
        <p style={{ ...styles.textColor }}>
          <strong>Polytechnic Education in Computer Science, Polytechnic Institute of Setúbal, Setúbal </strong> - 2017 to 2019
        </p>
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
  },
  badges: {
    marginRight: "10px"
  }
};

export default AboutMeWorkExperience
