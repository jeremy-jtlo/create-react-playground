import React, {Component} from 'react';
import Row from './row.js';

export default class RowEntries extends Component {
    render() {
        var data = require("../data/entries.json");
        console.log(data[0]);
        return (
            <div>
                <Row title={data[0].header}>{data[0].start_date}</Row>
                <Row title={data[1].header}>{data[1].start_date}</Row>
            </div>
        );
    }
}