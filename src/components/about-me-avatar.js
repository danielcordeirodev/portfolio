import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import myAvatar from '../my-avatar.png';

const AboutMeAvatar = (props) => {

  return (
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
  );
}

const styles = {
  centeredElement: {
    textAlign: 'center'
  }
}

export default AboutMeAvatar
