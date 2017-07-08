import React, {Component} from 'react';
import UlRender from './ul_render.js';

export default class Row extends Component {
    render() {
        // Creating a comma-separated string
        var skill_string = ""
        for (var i=0; i<this.props.skills.length; i++) {
            skill_string += this.props.skills[i]
            if (i+1 !== this.props.skills.length) {
                skill_string += ", "
            }
        }
        return(
            <div className="flex-container">
                <div className="col-12of12">
                    <h2 className="din-head primary-header">{this.props.job_title}</h2>
                </div>
                <div className="col-8of12">
                    <h3>{this.props.company}</h3>
                    <h4>{this.props.start_date} - {this.props.end_date}</h4>
                    <UlRender list={this.props.children}/>
                </div>
                <div className="col-4of12 center-mobile">
                    <h3>Skills</h3>
                    <p>{skill_string}</p>
                    <h3>Experience</h3>
                    <p><strong>{this.props.duration}</strong></p>
                </div>
            </div>
        );
    }
}