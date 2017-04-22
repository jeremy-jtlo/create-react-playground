import React, {Component} from 'react';
import Row from './row.js';

export default class RowEntries extends Component {
    render() {
        var data = require("../data/entries.json");
        var rows = []
        // Push elements based on JSON size
        for (var i=0; i<Object.keys(data).length; i++) {
            rows.push(<Row title={data[i].header}
                     start_date={data[i].start_date}
                     end_date={data[i].end_date}
                     key_string={data[i].key_string}>
                    {data[i].bullet_points}</Row>);
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}