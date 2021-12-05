import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import myAvatar from '../my-avatar.png';

const AboutMeHeader = (props) => {

  return (
    <Container>
      <Row>
        <Col
          style={{ ...styles.centeredElement }}>
          <Image
            src={myAvatar}
            roundedCircle
            fluid
            width="200" height="200" />
        </Col>
      </Row>
      <Row>
        <h1 style={{ ...styles.centeredElement }}>Daniel Cordeiro</h1>
        <h4 style={{ ...styles.headingSWEngineer, ...styles.centeredElement }}>Software Engineer</h4>
      </Row>
    </Container >
  );
}

const styles = {
  headingSWEngineer: {
    color: 'grey',
  },
  centeredElement: {
    textAlign: 'center'
  }
}

export default AboutMeHeader
