import React from "react";
import Button from "./button";
import about_content from "../data/about.json";
import { JSX } from "react";

const AboutEntry: React.FC = () => {
  // Get the contents out of the JSON
  const { buttons, paragraphs } = about_content;

  // Build the paragraphs
  const paragraph_array: JSX.Element[] = paragraphs.map((text: string) => (
    <p key={text}>{text}</p>
  ));

  // Spawn the 3 buttons in the 'about' section
  const button_array: JSX.Element[] = buttons.map(
    (button: { link: string; icon: string; string: string }) => {
      const { link, icon, string } = button;
      return (
        <Button
          key={string}
          extra_class="col-4of12"
          link={link}
          icon={icon}
          text={string}
        />
      );
    },
  );

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
};

export default AboutEntry;
