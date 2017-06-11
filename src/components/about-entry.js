import React, {Component} from 'react';

export default class AboutEntry extends Component {
    render () {
        var about_content = require("../data/about.json");
        return (
            <div className="flex-container">
                <div className="col-12of12">
                    <h1>{about_content.header}</h1>
                    <p>{about_content.content}</p>
                </div>
            </div>
        );
    }
}