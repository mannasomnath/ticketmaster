import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

const EventsList = (props) => {
    return (
        props.events.map(event => {
            return (
                <div key={event.event_id}>
                    <p>Event Name:- {event.event_name}</p>
                    <p>Event Venue: - {event.event_venue}</p>
                    <p>Event Date:- {event.event_date}</p>
                    <p>Ticket Cost:- {event.ticket_cost}</p>
                    {
                        props.userType == 'customer' && 
                        <p>Tickets Available: - {event.tickets_available}</p>
                    }                    
                    {
                        props.userType == 'organizer' ? 
                        <div>
                            <ButtonToolbar>
                                <Button onClick={() => props.viewEvent(event.event_id)}>View Event</Button>
                                <Button onClick={() => props.editEvent(event.event_id)}>Edit Event</Button>
                            </ButtonToolbar>   
                        </div>
                        :
                        <div>
                            <ButtonToolbar>
                                <Button onClick={() => props.purchaseTicket(event.event_id)}>Purchase Ticket</Button>
                            </ButtonToolbar>   
                        </div>
                    }
                    
                </div>
            )
        })
    )
}

export default EventsList