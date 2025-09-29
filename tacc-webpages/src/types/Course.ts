export interface CourseOutline {
    title: string;
    items: Array<string>;
  }

export interface CourseInstructor {
    image: string;
    title: string;
    name: string;
    duration: string;
    level: string;
    certificate: string;
    format: string;
  }

export interface Course {
    id: string;
    title: string;
    description: string;
    thumbnail_url?: string;
    objectives: Array<string>;
    objective_note: string;
    outline: Array<CourseOutline>;
    instructor: CourseInstructor;
    tags: string[];
    slug: string;
    amount: number
  }