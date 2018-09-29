import React from 'react'
import { Grid, Jumbotron, Button } from 'react-bootstrap'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button bsStyle="primary">Learn more</Button>
                    </p>
                </Jumbotron>              
            </Grid>            
        )
    }
}

export default Home