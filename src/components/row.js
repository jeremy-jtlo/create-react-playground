import React, {Component} from 'react';
import {Grid, Cell, Card, CardText, CardTitle, CardActions, Button} from 'react-mdl';
import UlRender from './ul_render.js';

export default class Row extends Component {
    render() {
        return (
            <Grid className="demo-grid-ruler">
                <Cell col={8}>
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.start_date} - {this.props.end_date}</h4>
                    <UlRender list={this.props.children}/>
                </Cell>
                <Cell col={4}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
        );
    }
}