import React, {Component} from 'react';

export default class AboutEntry extends Component {
    render () {
        var about_content = require("../data/about.json");
        return (
            <div className="flex-container">
                <div className="col-12of12">
                    <h1 className="din-head primary-header">{about_content.header}</h1>
                    
                </div>
                <div className="col-4of12 flex-container">
                    <a className="button col-4of12" href="#"><i className="fi-social-linkedin size-16"> </i>Linkedin </a>
                    <a className="button col-4of12" href="#"><i className="fi-social-github size-16"> </i>GitHub </a>
                    <a className="button col-4of12" href="#"><i className="fi-mail size-16"> </i>Email Me </a>
                </div>
                <div className="col-8of12"> 
                    <p>{about_content.content}</p>
                </div>
            </div>
        );
    }
}