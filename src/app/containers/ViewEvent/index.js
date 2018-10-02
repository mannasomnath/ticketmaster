import React, { Component } from 'react'
import { Grid, Form, FormGroup, Col, FormControl, ControlLabel, Well, Button } from 'react-bootstrap'
import { connect } from "react-redux"

class ViewEvent extends Component {

  componentDidMount() {
    let event_id = this.props.id;
    this.props.loadEventById(event_id);
  }

  handleClick = () => {
    this.props.history.push('/organize');
  }

  render() {
    let { event_loading, event, event_load_err } = this.props;
    if (event_loading) {
      return (
        <div className="loader"></div>
      )
    } else if (event) {
      return (
        <div className="_mt-20">
          <Grid>
            <Well>
              <h2>Event Details</h2>
              <Form horizontal>
                <FormGroup controlId="event_name">
                  <Col sm={2} md={4}>
                    Event Name
                                    </Col>
                  <Col sm={10} md={4}>
                    {event.event_name}
                  </Col>
                </FormGroup>
                <FormGroup controlId="event_venue">
                  <Col sm={2} md={4}>
                    Event Venue
                                    </Col>
                  <Col sm={10} md={4}>
                    {event.event_venue}
                  </Col>
                </FormGroup>
                <FormGroup controlId="event_date">
                  <Col sm={2} md={4}>
                    Event Date
                                    </Col>
                  <Col sm={10} md={4}>
                    {event.event_date}
                  </Col>
                </FormGroup>
                <FormGroup controlId="ticket_cost">
                  <Col sm={2} md={4}>
                    Ticket Cost
                                    </Col>
                  <Col sm={10} md={4}>
                    {event.ticket_cost}
                  </Col>
                </FormGroup>
                <FormGroup controlId="tickets_available">
                  <Col sm={2} md={4}>
                    Tickets Available
                                    </Col>
                  <Col sm={10} md={4}>
                    {event.tickets_available}
                  </Col>
                </FormGroup>
              </Form>
              <Button onClick={this.handleClick}>Back to Event List</Button>
            </Well>
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
    event_loading: state.eventsManipulate.event_loading,
    event: state.eventsManipulate.event,
    event_load_err: state.eventsManipulate.event_load_err,
    id: ownProps.match.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadEventById: (event_id) => dispatch({ type: "EVENT_LOADING", event_id: event_id }),
    updateEventById: (event) => dispatch({ type: "EVENT_UPDATE", event: event })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewEvent)
