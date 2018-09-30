import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap'

class Purchase extends Component {
    render() {
        return (
            <div className="_mt-20">
                <Grid>
                    <Jumbotron>
                        <h1>Purchase</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}

export default Purchase