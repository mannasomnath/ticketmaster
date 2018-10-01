import React, { Component } from 'react'
import { Grid, ButtonToolbar, Button } from 'react-bootstrap'
import { connect } from "react-redux"
import EventsList from '../../components/EventsList'

class Organize extends Component {

    componentDidMount() {
        this.props.changeUserType();
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

    backToHome = () => {
        this.props.history.push('/');
    }

    render() {
        let { fetching, events, error, userType } = this.props;        
        if(fetching) {
            return (
                <div className="loader"></div>
            )
        } else {
            return (
                <div className="_mt-20">               
                    <Grid>
                        <ButtonToolbar>
                            <Button onClick={() => this.addEvent()}>Add Event</Button>
                            <Button onClick={() => this.backToHome()}>Back to Home</Button>
                        </ButtonToolbar>                        
                        <div className="_mt-20"></div>                  
                        {
                            events && 
                            <div className="flex-container">                                
                                <EventsList userType={userType} events={events} viewEvent={this.viewEvent} editEvent={this.editEvent} />                                
                            </div>
                        }
                    </Grid>
            </div>
            )
        }
    }        
}

const mapStateToProps = state => {    
    return {
        fetching: state.events.fetching,
        events: state.events.events,
        error: state.events.error,
        userType: state.userType.userType
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        onRequestEvents: () => dispatch({ type: "API_CALL_REQUEST" }),
        changeUserType: () => dispatch( {type: "CHANGE_USER_TYPE", payload: "organizer"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Organize);