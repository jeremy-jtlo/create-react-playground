import React, {Component} from 'react';
import Button from './button.js';

export default class AboutEntry extends Component {
    render () {
        var about_content = require("../data/about.json");
        var button_array = [];
        
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
        return (
            <div className="flex-container">
                <div className="col-12of12">
                    <h1 className="din-head primary-header">{about_content.header}</h1>
                    
                </div>
                <div className="col-4of12 flex-container">
                    {button_array}
                </div>
                <div className="col-8of12"> 
                    <p>{about_content.content}</p>
                </div>
            </div>
        );
    }
}