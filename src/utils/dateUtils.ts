export function getMonthDuration(start: Date, end: Date): string {
  const time_diff = Math.abs(end.getTime() - start.getTime());
  const num_days = Math.ceil(time_diff / (1000 * 3600 * 24));
  const num_months = Math.floor(num_days / 30);
  let return_time = "";

  if (num_months < 1) {
    return_time = num_days + " days";
  } else if (num_months < 12) {
    return_time = num_months + " months";
  } else {
    const excess_months = num_months % 12;
    const num_years = Math.floor(num_months / 12);
    let year_string = "";
    let month_string = "";

    if (excess_months > 0) {
      year_string = num_years === 1 ? " year and " : " years and ";
    } else {
      if (num_years === 1) {
        year_string = " year ";
      } else {
        year_string = " years ";
      }
    }

    if (excess_months < 1) {
      month_string = "";
    } else if (excess_months === 1) {
      month_string = " month";
    } else {
      month_string = " months";
    }
    return_time = num_years + year_string + excess_months + month_string;
  }

  return return_time;
}