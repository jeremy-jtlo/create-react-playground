import React, { Component } from "react";
import HeaderSplitter from "./header-splitter.js";
import RowEntries from "./row-entries.js";
import AboutEntry from "./about-entry.js";

export default class DataArea extends Component {
  render() {
    return (
      <div className="canvas">
        <HeaderSplitter
          head_class="header_split_right din-head"
          content="Jeremy Lo"
          sub_title_class="header_split_right"
          sub_title="Software Engineer"
        />
        <AboutEntry></AboutEntry>
        <HeaderSplitter
          head_class="header_split_center din-head"
          content="Work"
        />
        <RowEntries></RowEntries>
      </div>
    );
  }
}
