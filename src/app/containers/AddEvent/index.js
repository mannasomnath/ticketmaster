import React, { Component } from 'react'
import { Grid, Form, FormGroup, Col, FormControl, ButtonToolbar, Button, Alert } from 'react-bootstrap'
import { connect } from "react-redux"

class AddEvent extends Component {
    state = {
        event_name: '',
        event_venue: '',
        event_date: '',
        ticket_cost: '',
        tickets_available: ''
    }

    componentDidMount() {
        this.props.resetAdd();
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addEvent = () => {
        const events = JSON.parse(localStorage.getItem("events"));
        const new_id = events && events.length > 0 ? (parseInt(events[events.length - 1].event_id)) + 1 : 1;
        const event = {
            event_id: new_id,
            event_name: this.state.event_name,
            event_venue: this.state.event_venue,
            event_date: this.state.event_date,
            ticket_cost: this.state.ticket_cost,
            tickets_available: this.state.tickets_available
        }
        this.props.addEvent(event);
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
                    <h4>1 record added successfully</h4>
                    <p>
                        <Button onClick={this.showEventList}>Back to Event List</Button>
                    </p>
                </Alert>
            )
        } else {
            return (
                <div className="_mt-20">
                    <Grid>
                        <h2>Add New Event</h2>
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
                                        <Button onClick={this.addEvent}>Add Event</Button>
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

const mapStateToProps = (state) => {
    return {
        event_loading: state.addEvent.add_event,
        event_add_success: state.addEvent.add_event_success,
        event_add_err: state.addEvent.add_event_err
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetAdd: () => dispatch( {type: "RESET_ADD"}),
        addEvent: (event) => dispatch({ type: "API_ADD_REQUEST", event: event })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)