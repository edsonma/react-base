import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { Glyphicon, Row, Col, Grid } from 'react-bootstrap';
import Datetime from 'react-datetime';
import Message from './message';
import moment from 'moment';

import './component-one.css';
import './react-datetime.css';

class ComponentOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      message: 'submitted component one!'
    });

    alert('submitted component one!');
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  renderForm() {
    return(
    <div>
      <Grid>
        <Row>
        <Col>
          <h3> This is a template of React App </h3>
        </Col>
        </Row>
      </Grid>
      <form className="ReactForm" onSubmit={ this.handleSubmit }>
        <Grid>
        <Row>
        <Col xs={12} md={12}>
          {this.state.message && <Message message={this.state.message} message_type="info" />}
        </Col>
        </Row>

        <Row>
        <Col xs={8} md={8}>
          <FormGroup>
            <ControlLabel> Name: </ControlLabel>
            <FormControl
              type="text"
              placeholder="Full Name"
              value={this.state.name}
              onChange={this.handleChangeName}
              required={true}
            />
          </FormGroup>
        </Col>
        </Row>

        <Row>
        <Col xs={8} md={8}>
          <FormGroup>
            <Button
              type="submit"
              bsStyle="success"
              className="Send" 
              block>
                Processar
            </Button>
          </FormGroup>
        </Col>
        </Row>
      </Grid>
    </form>
    </div>

    )
  }

  render() {
    return (
      <div className="React">
        { this.renderForm() }
      </div>
    );
  }
}

ComponentOne.propTypes = {};

export default ComponentOne;

