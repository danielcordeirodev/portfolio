import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutMeHeader from './about-me-header';
import AboutMeAvatar from './about-me-avatar';
import AboutMeDescription from './about-me-description';

const AboutMe = (props) => {

  return (
    <Container fluid>
      <Row style={{ ...styles.backgroundColor, ...styles.marginTop }}>
        <AboutMeAvatar />
        <AboutMeHeader />
      </Row>
      <AboutMeDescription />
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
