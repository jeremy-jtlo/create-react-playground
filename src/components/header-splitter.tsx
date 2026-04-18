import React from "react";

interface HeaderSplitterProps {
  head_class: string;
  content: string;
  sub_title_class?: string;
  sub_title?: string;
}

const HeaderSplitter: React.FC<HeaderSplitterProps> = ({ head_class, content, sub_title_class, sub_title }) => {
  const optional_tag = sub_title ? (
    <p className={sub_title_class}>{sub_title}</p>
  ) : null;
  return (
    <div className="flex-container header_split_upper_space">
      <div className="col-12of12">
        <h1 className={head_class}>{content}</h1>
        {optional_tag}
      </div>
    </div>
  );
};

export default HeaderSplitter;
