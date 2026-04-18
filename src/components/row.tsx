import React from "react";
import UlRender from "./ul_render";
import { Link } from "../types/data";

interface RowProps {
  company: string;
  job_title: string;
  start_date: string;
  end_date: string;
  skills: string[];
  duration: string;
  links: Link[];
  children: string[];
}

const Row: React.FC<RowProps> = ({ company, job_title, start_date, end_date, skills, duration, links, children }) => {
  const build_link_object = (link: Link) => (
    <li key={link.label}>
      <a target="blank" href={link.href}>
        {link.label}
      </a>
    </li>
  );

  const skill_string = skills.join(", ");

  const has_links = links.length > 0;
  const external_link_list = has_links ? (
    <ul className="job-links">{links.map(build_link_object)}</ul>
  ) : null;
  const external_link_label = has_links ? (
    <h3 className="secondary-header">Links</h3>
  ) : null;

  return (
    <div className="flex-container">
      <div className="col-12of12">
        <h2 className="din-head primary-header">{job_title}</h2>
      </div>
      <div className="col-8of12">
        <h3>{company}</h3>
        <h4>
          {start_date} - {end_date}
        </h4>
        <UlRender list={children} />
      </div>
      <div className="col-4of12 center-mobile">
        {external_link_label}
        {external_link_list}
        <h3 className="secondary-header">Skills</h3>
        <p>{skill_string}</p>
        <h3 className="secondary-header">Experience</h3>
        <p>
          <strong>{duration}</strong>
        </p>
      </div>
    </div>
  );
};

export default Row;
