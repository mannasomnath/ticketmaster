import React, { Component } from 'react'
import { Grid, Form, FormGroup, Col, FormControl, ButtonToolbar, Button, Modal } from 'react-bootstrap'
import { connect } from "react-redux"

class EditEvent extends Component {
  state = {
    event_name: '',
    event_venue: '',
    event_date: '',
    ticket_cost: '',
    tickets_available: ''
  }

  componentDidMount() {
    this.props.resetView();
    this.props.loadEventForEdit(this.props.id);
  }

  componentWillReceiveProps(props) {
    this.setState({
      event_name: props.load_event_success ? props.load_event_success.event_name : '',
      event_venue: props.load_event_success ? props.load_event_success.event_venue : '',
      event_date: props.load_event_success ? props.load_event_success.event_date : '',
      ticket_cost: props.load_event_success ? props.load_event_success.ticket_cost : '',
      tickets_available: props.load_event_success ? props.load_event_success.tickets_available : ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  editEvent = () => {
    const event = {
      event_id: this.props.id,
      event_name: this.state.event_name,
      event_venue: this.state.event_venue,
      event_date: this.state.event_date,
      ticket_cost: this.state.ticket_cost,
      tickets_available: this.state.tickets_available
    }
    this.props.editEvent(event);
  }

  showEventList = () => {
    this.props.history.push('/organize');
  }

  render() {
    if (this.props.event_loading || this.props.load_event) {
      return (
        <div className="loader"></div>
      )
    } else if (this.props.event_add_success) {
      return (
        <Modal.Dialog>
          <Modal.Body>1 record updated successfully</Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.showEventList}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      )
    } else if (this.props.load_event_success) {
      return (
        <div className="_mt-20">
          <Grid>
            <h2>Edit Event</h2>
            <Form horizontal>
              <FormGroup controlId="event_name">
                <Col sm={2} md={4}>
                  Event Name
								</Col>
                <Col sm={10} md={4}>
                  <FormControl type="text" placeholder="Event Name" value={this.state.event_name} onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup controlId="event_venue">
                <Col sm={2} md={4}>
                  Event Venue
								</Col>
                <Col sm={10} md={4}>
                  <FormControl type="text" placeholder="Event Venue" value={this.state.event_venue} onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup controlId="event_date">
                <Col sm={2} md={4}>
                  Event Date
								</Col>
                <Col sm={10} md={4}>
                  <FormControl type="text" placeholder="Event Date" value={this.state.event_date} onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup controlId="ticket_cost">
                <Col sm={2} md={4}>
                  Ticket Cost
								</Col>
                <Col sm={10} md={4}>
                  <FormControl type="text" placeholder="Ticket Cost" value={this.state.ticket_cost} onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup controlId="tickets_available">
                <Col sm={2} md={4}>
                  Tickets Available
								</Col>
                <Col sm={10} md={4}>
                  <FormControl type="text" placeholder="Tickets Available" value={this.state.tickets_available} onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup controlId="tickets_available">
                <Col smOffset={2} sm={10} mdOffset={4} md={4}>
                  <ButtonToolbar>
                    <Button onClick={this.editEvent}>Edit Event</Button>
                    <Button onClick={this.showEventList}>Back to Event List</Button>
                  </ButtonToolbar>
                </Col>
              </FormGroup>
            </Form>
          </Grid>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    event_loading: state.editEvent.edit_event,
    event_add_success: state.editEvent.edit_event_success,
    event_add_err: state.editEvent.edit_event_err,
    load_event: state.loadEditEvent.load_event,
    load_event_success: state.loadEditEvent.load_event_success,
    load_event_err: state.loadEditEvent.load_event_err,
    id: ownProps.match.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetView: () => dispatch({ type: "RESET_VIEW" }),
    loadEventForEdit: (event_id) => dispatch({ type: "API_LOAD_EVENT_REQUEST", event_id: event_id }),
    editEvent: (event) => dispatch({ type: "API_EDIT_REQUEST", event: event })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent)