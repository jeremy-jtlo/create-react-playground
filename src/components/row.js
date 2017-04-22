import React, {Component} from 'react';
import {Grid, Cell, Card, CardText, CardTitle, CardActions, Button} from 'react-mdl';
import UlRender from './ul_render.js';

export default class Row extends Component {
    render() {
        return (
            <Grid className="demo-grid-ruler">
                <Cell col={8}>
                    <h3 className="job-header">{this.props.title}</h3>
                    <h4>{this.props.start_date} - {this.props.end_date}</h4>
                    <UlRender list={this.props.children}/>
                </Cell>
                <Cell col={4}>
                    <Card shadow={0}>
                        <CardTitle expand style={{color: '#fff', background: 'black'}}>Key Lessons</CardTitle>
                        <CardText>
                        {this.props.key_string}
                        </CardText>
                        <CardActions border>
                            <Button colored>View on LinkedIn</Button>
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
        );
    }
}