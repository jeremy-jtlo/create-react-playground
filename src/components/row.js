import React, {Component} from 'react';
import UlRender from './ul_render.js';

export default class Row extends Component {
    render() {
        return(
            <div className="flex-container">
                <div className="col-8of12">
                    <h3 className="job-header">{this.props.title}</h3>
                    <h4>{this.props.start_date} - {this.props.end_date}</h4>
                    <UlRender list={this.props.children}/>
                </div>
                <div className="col-4of12">
                    <h3>Key Lessons</h3>
                    <p>{this.props.key_string}</p>
                </div>
            </div>
        );
    }
}