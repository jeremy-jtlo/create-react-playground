import React, {Component} from 'react';
import {Grid, Cell, Spacer} from 'react-mdl';

export default class AboutEntry extends Component {
    render () {
        var about_content = require("../data/about.json");
        return (
            <Grid>
                <Cell col={6}>
                    <Spacer/>
                    <a href="http://placehold.it"><img alt="Placeholder for profile avatar" src="http://placehold.it/300x300"/></a>
                    <Spacer/>
                </Cell>
                <Cell col={6}>
                    <h2>{about_content.header}</h2>
                    <p>{about_content.content}</p>
                </Cell>
            </Grid>
        );
    }
}