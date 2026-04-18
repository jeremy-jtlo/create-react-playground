interface Link {
  label: string;
  href: string;
}

interface AboutData {
  header: string;
  paragraphs: string[];
  buttons: {
    string: string;
    link: string;
    icon: string;
  }[];
}

interface Job {
  id: number;
  header: string;
  title: string;
  start_date: string;
  end_date: string;
  links: Link[];
  hard_skills: string[];
  bullet_points: string[];
}

type JobsData = Job[];

export type { AboutData, JobsData, Job, Link };