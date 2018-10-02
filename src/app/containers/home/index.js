import React, { Component } from 'react'
import { Grid, Panel, ButtonToolbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { events } from '../../events'

class Home extends Component {

  componentDidMount() {
    localStorage.setItem("events", JSON.stringify(events));
  }

  render() {
    return (
      <div className="_mt-20">
        <Grid>
          <Panel bsStyle="primary">
            <Panel.Heading>
              <Panel.Title>What do you want to do today?</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <ButtonToolbar>
                <Button bsSize="large" active>
                  <Link to="/organize">Organize an Event</Link>
                </Button>
                <Button bsSize="large" active>
                  <Link to="/purchase">Purchase Tickets for an Event</Link>
                </Button>
              </ButtonToolbar>
            </Panel.Body>
          </Panel>
        </Grid>
      </div>
    )
  }
}

export default Home