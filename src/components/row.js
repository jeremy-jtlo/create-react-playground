import React, {Component} from 'react';
import {Grid, Cell, Card, CardText, CardTitle} from 'react-mdl';

export default class Row extends Component {
    render() {
        return (
            <Grid className="demo-grid-ruler">
                <Cell col={8}>
                    <Card shadow={0}>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardText>{this.props.children}</CardText>
                    </Card>
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