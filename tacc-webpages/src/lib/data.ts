// Real Supabase data layer — returns empty arrays / null so UI shows empty states.
// Replace each function body with actual supabase.from() calls once your DB is seeded.
import { supabase as createClient } from '@/lib/supabase';
import type { Course, CourseEvent, Assignment, LeaderboardEntry, SkillProgress, StudentStats, Activity } from '@/types/Course';

export async function fetchCourses(): Promise<Course[]> {
  const supabase = createClient;
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) { console.error('fetchCourses', error); return []; }
  return (data ?? []) as Course[];
}

export async function fetchEnrolledCourses(userId: string): Promise<Course[]> {
  const supabase = createClient;
  const { data, error } = await supabase
    .from('purchases')
    .select('course:courses(*), progress, status, completed_lessons')
    .eq('user_id', userId);
  if (error) { console.error('fetchEnrolledCourses', error); return []; }
  return (data ?? []).map((row: any) => ({
    ...row.course,
    progress: row.progress ?? 0,
    status: row.status ?? 'upcoming',
    completed_lessons: row.completed_lessons ?? 0,
  })) as Course[];
}

export async function fetchEventsByCourse(courseId: string): Promise<CourseEvent[]> {
  const supabase = createClient;
  const { data, error } = await supabase
    .from('course_events')
    .select('*')
    .eq('course_id', courseId)
    .order('event_date', { ascending: true });
  if (error) { console.error('fetchEventsByCourse', error); return []; }
  return (data ?? []) as CourseEvent[];
}

export async function fetchAllEvents(userId: string): Promise<CourseEvent[]> {
  const supabase = createClient;
  // Get events for all courses the user is enrolled in
  const { data, error } = await supabase
    .from('course_events')
    .select('*, course:courses(title, color, emoji)')
    .in('course_id',
      (await supabase.from('purchases').select('course_id').eq('user_id', userId))
        .data?.map((r: any) => r.course_id) ?? []
    )
    .order('event_date', { ascending: true });
  if (error) { console.error('fetchAllEvents', error); return []; }
  return (data ?? []) as CourseEvent[];
}

export async function fetchAssignments(userId: string): Promise<Assignment[]> {
  const supabase = createClient;
  const { data, error } = await supabase
    .from('assignments')
    .select('*, course:courses(title, color, emoji, subject)')
    .eq('user_id', userId)
    .order('due_date', { ascending: true });
  if (error) { console.error('fetchAssignments', error); return []; }
  return (data ?? []) as Assignment[];
}

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  const supabase = createClient;
  const { data, error } = await supabase
    .from('leaderboard')
    .select('*')
    .order('xp', { ascending: false })
    .limit(10);
  if (error) { console.error('fetchLeaderboard', error); return []; }
  return (data ?? []) as LeaderboardEntry[];
}

export async function fetchSkills(userId: string): Promise<SkillProgress[]> {
  const supabase = createClient;
  const { data, error } = await supabase
    .from('skill_progress')
    .select('*')
    .eq('user_id', userId)
    .order('progress', { ascending: false });
  if (error) { console.error('fetchSkills', error); return []; }
  return (data ?? []) as SkillProgress[];
}

export async function fetchStats(userId: string): Promise<StudentStats | null> {
  const supabase = createClient;
  const { data, error } = await supabase
    .from('student_stats')
    .select('*')
    .eq('user_id', userId)
    .single();
  if (error) { console.error('fetchStats', error); return null; }
  return data as StudentStats;
}

export async function fetchActivity(userId: string): Promise<Activity[]> {
  const supabase = createClient;
  const { data, error } = await supabase
    .from('activity_log')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(8);
  if (error) { console.error('fetchActivity', error); return []; }
  return (data ?? []) as Activity[];
}


export async function getUserProfile() {
  const { data, error } = await createClient.auth.getUser();
  if (error) {
    console.error('getUserProfile', error);
    return null;
  }
  
  return {
    id: data?.user?.id ?? '',
    email: data?.user?.email ?? '',
    firstName: data?.user?.user_metadata["first_name"] ?? '',
    lastName: data?.user?.user_metadata["last_name"] ?? '',
  };
}