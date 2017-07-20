import React, {Component} from 'react';
import Button from './button.js';

export default class AboutEntry extends Component {
    render () {
        var about_content = require("../data/about.json");
        var button_array = [];
        var paragraph_array = [];
        
        // Spawning buttons from JSON
        for (var i=0; i<Object.keys(about_content["buttons"]).length; i++) {
            var current_item = about_content["buttons"][i]
            button_array.push(
                <Button 
                    extra_class="col-4of12"
                    link={current_item["link"]}
                    icon={current_item["icon"]}
                    text={current_item["string"]}
                />
            );
        }

        // Grabbing content paragraphs
        for (var k=0; k<Object.keys(about_content["paragraphs"]).length; k++) {
            paragraph_array.push(
                <p>
                {about_content["paragraphs"][k]}
                </p>
            );
        }
        return (
            <div className="flex-container">
                <div className="col-12of12">
                    <h2 className="din-head primary-header">{about_content.header}</h2>
                </div>
                <div className="col-4of12 flex-container">
                    {button_array}
                </div>
                <div className="col-8of12"> 
                    {paragraph_array}

                    <a href="https://github.com/jeremy-jtlo/create-react-playground" target="_blank">
                    Source code for this site
                    </a>
                </div>
            </div>
        );
    }
}