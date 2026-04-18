import React from "react";

interface ButtonProps {
  extra_class: string;
  link: string;
  icon: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ extra_class, link, icon, text }) => {
  const class_name = "button " + extra_class;
  return (
    <a className={class_name} href={link} target="_blank">
      <i className={icon}> </i>
      {text}
    </a>
  );
};

export default Button;
