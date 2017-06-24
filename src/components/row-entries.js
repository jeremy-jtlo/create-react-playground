import React, {Component} from 'react';
import Row from './row.js';

export default class RowEntries extends Component {
    render() {
        var data = require("../data/jobs.json");
        var rows = [];
        var month_names = [
        "January", "February", "March", 
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"];

        // Push elements based on JSON items
        for (var i=0; i<Object.keys(data).length; i++) {

            var start_object = new Date(data[i].start_date);
            var end_object = new Date(data[i].end_date);

            var print_start = month_names[start_object.getMonth()] + " " + start_object.getFullYear();
            var print_end = month_names[end_object.getMonth()] + " " + end_object.getFullYear();

            console.log(end_object.getTime());
            if (!end_object.getTime()) {
                end_object = new Date();
                print_end = month_names[end_object.getMonth()] + " " + end_object.getFullYear() + " (current)";
            }

            var time_diff = Math.abs(end_object.getTime() - start_object.getTime());
            var num_days = Math.ceil(time_diff / (1000 * 3600 * 24));
            var num_months = Math.ceil(num_days / 30);
            var display_time = 0;
            
            if (num_months < 1) {
                display_time = num_days + " days";
            } else if (num_months < 12){
                console.log(num_months);
                display_time = num_months + " months";
            } else {
                var excess_months = num_months % 12;
                var num_years = Math.floor(num_months / 12);
                var year_string = "";
                var month_string = "";

                if (num_years === 1) {
                    year_string = " year and ";
                } else {
                    year_string = " year and ";
                }

                if (excess_months === 1) {
                    month_string = " month";
                } else {
                    month_string = " months";
                }
                display_time = num_years + year_string + excess_months + month_string;
            }
            
            rows.push(<Row title={data[i].header}
                     start_date={print_start}
                     end_date={print_end}
                     key_string={data[i].key_string}>
                    {data[i].bullet_points}</Row>);
            
            // DEBUG
            rows.push(<p>{display_time}</p>)
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}