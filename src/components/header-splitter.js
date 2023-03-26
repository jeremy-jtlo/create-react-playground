import React, { Component } from "react";

export default class HeaderSplitter extends Component {
  render() {
    var optional_tag;
    if (this.props.sub_title) {
      optional_tag = (
        <p className={this.props.sub_title_class}>{this.props.sub_title}</p>
      );
    }
    return (
      <div className="flex-container header_split_upper_space">
        <div className="col-12of12">
          <h1 className={this.props.head_class}>{this.props.content}</h1>
          {optional_tag}
        </div>
      </div>
    );
  }
}
