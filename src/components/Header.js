import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';
import '.././css/header.css';

class Header extends Component {

  render() {
    return (
      <Row className="bg">
        <Col><h2>Show Records</h2></Col>
      </Row>
    )
  }
}

export default Header;
