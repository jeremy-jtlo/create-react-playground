import React from "react";
import HeaderSplitter from "./header-splitter";
import RowEntries from "./row-entries";
import AboutEntry from "./about-entry";

const DataArea: React.FC = () => (
  <div className="canvas">
    <HeaderSplitter
      head_class="header_split_right din-head"
      content="Jeremy Lo"
      sub_title_class="header_split_right"
      sub_title="Software Engineer"
    />
    <AboutEntry />
    <HeaderSplitter
      head_class="header_split_center din-head"
      content="Work"
    />
    <RowEntries />
  </div>
);

export default DataArea;
