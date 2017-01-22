import React, {Component} from 'react';
import {Grid, Cell, Card, CardText, CardTitle} from 'react-mdl';

export default class DataArea extends Component {
  render() {
    return(
      <div>
	      <Grid>
	        <Cell col={4}>
	          <Card shadow={0}>
	          	<CardTitle>Title01</CardTitle>
	          	<CardText>
	          	  Dummy Card 1
	          	</CardText>
	          </Card>
	        </Cell>
	        <Cell col={4}>
	          <Card shadow={0}>
	          	<CardTitle>Title02</CardTitle>
	          	<CardText>
	          	  Second dummy card
	          	</CardText>
	          </Card>
	        </Cell>
	        <Cell col={4}>
	          <Card shadow={0}>
	          	<CardTitle>Title03</CardTitle>
	          	<CardText>
	          	  The third dummy card
	          	</CardText>
	          </Card>
	        </Cell>
	      </Grid>
      </div>
    );
  }
}