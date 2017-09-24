import React, { Component } from 'react';
import {Button, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { Row, Col, Grid } from 'react-bootstrap';
import Message from './message';

import './component-two.css';

class ComponentTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      message:''
    }

    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({
      message: 'Submitted Component Two!'
    });

    alert('Submitted Component Two!')
  }

  render() {
    return(
    <div className="React">
      <form className="ReactForm" onSubmit={ this.handleSubmit } >
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              {this.state.message && <Message message={this.state.message} message_type="info" />}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h4> This is Component Two </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <FormGroup>
                <ControlLabel> Description </ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Component Two"
                  defaultValue={this.description}
                  required={true}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <FormGroup>
              <Button
                type="submit"
                bsStyle="warning"
                block>
                  Submit Description
              </Button>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </form>
    </div>
    )
  }
}

export default ComponentTwo;
