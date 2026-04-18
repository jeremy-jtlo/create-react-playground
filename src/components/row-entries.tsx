import React from "react";
import Row from "./row";
import jobs from "../data/jobs.json";
import { getMonthDuration } from "../utils/dateUtils";

const RowEntries: React.FC = () => {
  const month_names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const rows = jobs.map((job) => {
    const start_object = new Date(job.start_date);
    const end_object = job.end_date === "Current" ? new Date() : new Date(job.end_date);

    const print_start =
      month_names[start_object.getMonth()] + " " + start_object.getFullYear();
    let print_end =
      month_names[end_object.getMonth()] + " " + end_object.getFullYear();

    if (job.end_date === "Current") {
      print_end += " (current)";
    }

    const display_time = getMonthDuration(start_object, end_object);

    return (
      <Row
        key={job.id}
        company={job.header}
        job_title={job.title}
        start_date={print_start}
        end_date={print_end}
        skills={job.hard_skills}
        duration={display_time}
        links={job.links}
      >
        {job.bullet_points}
      </Row>
    );
  });

  return <div>{rows}</div>;
};

export default RowEntries;
