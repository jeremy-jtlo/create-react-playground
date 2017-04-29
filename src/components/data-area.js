import React, {Component} from 'react';
import RowEntries from './row-entries.js';
import AboutEntry from './about-entry.js';

export default class DataArea extends Component {
  render() {
    return(
      <div>
        <AboutEntry></AboutEntry>
	      <RowEntries></RowEntries>
      </div>
    );
  }
}