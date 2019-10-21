import React, {Component} from 'react';
import UlRender from './ul_render.js';

export default class Row extends Component {
    render() {
        function build_link_object(link) {
            return <li><a target="blank" href={link.href}>{link.label}</a></li>;
        }

        // Creating a comma-separated string
        var skill_string = ""
        for (var i=0; i<this.props.skills.length; i++) {
            skill_string += this.props.skills[i]
            if (i+1 !== this.props.skills.length) {
                skill_string += ", "
            }
        }

        // Populating links, if applicable
        var has_links = (this.props.links).length > 0;
        var external_link_list = has_links ? <ul className="job-links">{(this.props.links).map(build_link_object)}</ul> : [];
        var external_link_label = has_links ? <h3 className="secondary-header">Links</h3> : "";

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
                    {external_link_label}
                    {external_link_list}
                    <h3 className="secondary-header">Skills</h3>
                    <p>{skill_string}</p>
                    <h3 className="secondary-header">Experience</h3>
                    <p><strong>{this.props.duration}</strong></p>
                </div>
            </div>
        );
    }
}