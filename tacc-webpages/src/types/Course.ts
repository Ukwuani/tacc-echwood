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
    amount: number;
    color: string;
    emoji: string;
    progress: number;
    // status: 'in_progress' | 'upcoming' | 'completed';
    status: string;
    next_lesson: string;
    total_lessons: number;
    completed_lessons: number;
    subject: string;
  }

export interface CourseEvent {
  id: string;
  course_id: string;
  title: string;
  description: string;
  event_date: string; // ISO string
  event_time: string;
  type: 'live' | 'workshop' | 'review' | 'guest';
  meeting_link: string;
  course?: Course;
}

export interface Assignment {
  id: string;
  course_id: string;
  title: string;
  due_date: string;
  status: 'pending' | 'submitted' | 'graded' | 'overdue';
  grade?: number;
  max_grade: number;
  course?: Course;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar_initials: string;
  avatar_color: string;
  xp: number;
  rank: number;
  is_current_user?: boolean;
}

export interface SkillProgress {
  id: string;
  skill: string;
  progress: number;
  color: string;
}

export interface StudentStats {
  weekly_study_hours: number;
  weekly_goal_hours: number;
  assignments_due: number;
  assignments_overdue: number;
  xp: number;
  level: number;
  xp_to_next: number;
  streak: number;
  monthly_hours: number;
}

export interface Activity {
  id: string;
  description: string;
  time: string;
  color: string;
  icon: string;
}
