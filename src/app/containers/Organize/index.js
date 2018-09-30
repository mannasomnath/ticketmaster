import React, { Component } from 'react'
import { Grid, ButtonToolbar, Button } from 'react-bootstrap'
import { connect } from "react-redux"

class Organize extends Component {

    componentDidMount() {
        this.props.onRequestEvents();
    }

    viewEvent = (event_id) => {
        this.props.history.push(`/viewEvent/${event_id}`);
    }

    editEvent = (event_id) => {
        this.props.history.push(`/editEvent/${event_id}`);
    }

    addEvent = () => {
        this.props.history.push('/addEvent');        
    }

    render() {
        let { fetching, events, error } = this.props;        
        if(fetching) {
            return (
                <div className="loader"></div>
            )
        } else {
            return (
                <div className="_mt-20">               
                    <Grid>
                        <Button onClick={() => this.addEvent()}>Add Event</Button>
                        <div className="_mt-20"></div>                  
                        {
                            events && 
                            <div className="flex-container">
                                {
                                    events.map(event => {
                                        return (
                                            <div key={event.event_id}>
                                                <p>Event Name:- {event.event_name}</p>
                                                <p>Event Venue: - {event.event_venue}</p>
                                                <p>Event Date:- {event.event_date}</p>
                                                <p>Ticket Cost:- {event.ticket_cost}</p>
                                                <div>
                                                    <ButtonToolbar>
                                                        <Button onClick={() => this.viewEvent(event.event_id)}>View Event</Button>
                                                        <Button onClick={() => this.editEvent(event.event_id)}>Edit Event</Button>
                                                    </ButtonToolbar>   
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </Grid>
            </div>
            )
        }
    }        
}

const mapStateToProps = state => {
    console.log(state)
    return {
        fetching: state.events.fetching,
        events: state.events.events,
        error: state.events.error
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        onRequestEvents: () => dispatch({ type: "API_CALL_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Organize);