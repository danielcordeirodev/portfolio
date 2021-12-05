import React from 'react';
import { Row } from 'react-bootstrap';

const AboutMeHeader = (props) => {

  return (
    <Row>
      <h1 style={{ ...styles.centeredElement }}>Daniel Cordeiro</h1>
      <h4 style={{ ...styles.headingSWEngineer, ...styles.centeredElement }}>Software Engineer</h4>
    </Row>
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
