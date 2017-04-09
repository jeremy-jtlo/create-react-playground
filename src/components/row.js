import React, {Component} from 'react';
import {Grid, Cell, Card, CardText, CardTitle} from 'react-mdl';
import UlRender from './ul_render.js';

export default class Row extends Component {
    render() {
        return (
            <Grid className="demo-grid-ruler">
                <Cell col={8}>
                    <h3>{this.props.title}</h3>
                    <UlRender list={this.props.children}/>
                </Cell>
                <Cell col={4}>
                    <Card shadow={0}>
                        <CardTitle>DUMMY</CardTitle>
                        <CardText>Hipster ipsum</CardText>
                    </Card>
                </Cell>
            </Grid>
        );
    }
}