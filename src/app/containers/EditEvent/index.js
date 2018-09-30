import React, { Component } from 'react'
import { Grid, Form, FormGroup, Col, FormControl, ButtonToolbar, Button, Alert } from 'react-bootstrap'
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
        const events = JSON.parse(localStorage.getItem("events"))
        const event = events.filter(event => event.event_id == this.props.id)[0]
        this.setState({
            event_name: event.event_name,
            event_venue: event.event_venue,
            event_date: event.event_date,
            ticket_cost: event.ticket_cost,
            tickets_available: event.tickets_available
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
        if(this.props.event_loading) {
            return (
                <div className="loader"></div>
            )
        } else if(this.props.event_add_success) {
            return (
                <Alert bsStyle="success">
                    <h4>1 record updated successfully</h4>
                    <p>
                        <Button onClick={this.showEventList}>Back to Event List</Button>
                    </p>
                </Alert>
            )
        } else {
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
        }        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        event_loading: state.editEvent.edit_event,
        event_add_success: state.editEvent.edit_event_success,
        event_add_err: state.editEvent.edit_event_err,
        id: ownProps.match.params.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editEvent: (event) => dispatch({ type: "API_EDIT_REQUEST", event: event })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent)