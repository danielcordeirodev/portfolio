import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutMeHeader from './about-me-header';
import AboutMeAvatar from './about-me-avatar';
import AboutMeDescription from './about-me-description';
import AboutMeWorkExperience from './about-me-work-experience';

const AboutMe = (props) => {

  return (
    <Container fluid>
      <Row style={{ ...styles.backgroundColor, ...styles.marginTop }}>
        <AboutMeAvatar />
        <AboutMeHeader />
      </Row>
      <AboutMeDescription />
      <hr />
      <AboutMeWorkExperience />
    </Container >
  );
}

const styles = {
  backgroundColor: {
    backgroundColor: "#D8DCD6"
  },
  marginTop: {
    marginTop: "56px"
  }
}

export default AboutMe
