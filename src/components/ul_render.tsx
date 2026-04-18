import React from "react";

interface UlRenderProps {
  list: string[];
}

const UlRender: React.FC<UlRenderProps> = ({ list }) => {
  return (
    <ul>
      {list.map((listValue) => (
        <li key={listValue}>{listValue}</li>
      ))}
    </ul>
  );
};

export default UlRender;
