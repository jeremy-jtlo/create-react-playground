import React, { Component } from "react";
import Button from "./button.js";

export default class AboutEntry extends Component {
  render() {
    var about_content = require("../data/about.json");
    const buttons = about_content["buttons"];
    const paragraphs = about_content["paragraphs"];

    const paragraph_array = Object.keys(paragraphs).map(
      (key) => {
        return <p>{paragraphs[key]}</p>
      }
    );

    // Spawn the 3 buttons in the 'about' section
    const button_array = Object.keys(buttons).map((key) => {
      const {link, icon, string} = buttons[key];
      return (
        <Button 
          extra_class="col-4of12"
          link={link}
          icon={icon}
          text={string}
        />
      );
    });

    return (
      <div className="flex-container">
        <div className="col-12of12">
          <h2 className="din-head primary-header">{about_content.header}</h2>
        </div>
        <div className="col-4of12 flex-container">{button_array}</div>
        <div className="col-8of12">
          {paragraph_array}

          <a
            href="http://jeremy-jtlo.github.io/files/jeremy-resume.pdf"
            target="_blank"
          >
            Download this resume as a PDF.
          </a>
          <br />
          <a
            href="https://github.com/jeremy-jtlo/create-react-playground"
            target="_blank"
          >
            View source code for this site.
          </a>
        </div>
      </div>
    );
  }
}
