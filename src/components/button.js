import React, {Component} from 'react';

export default class Button extends Component {
    render() {
        var class_name = "button " + this.props.extra_class;
        return(
            <a className={class_name} href={this.props.link} target="_blank">
                <i className={this.props.icon}> </i>
                {this.props.text}
            </a>
        );
    }
}