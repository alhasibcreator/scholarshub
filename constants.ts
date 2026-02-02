
import { Resource, Category, Semester, Notice, ScheduleItem, ChatLog } from './types';
import { logToSupabase } from './services/supabaseService';

// Default values for the platform
const DEFAULT_RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Data Structures & Algorithms - Complete Notes',
    courseCode: 'CSE-211',
    semester: Semester.S3,
    category: Category.NOTES,
    author: 'Prof. Rahman',
    uploadDate: '2023-10-15',
    downloadUrl: '#',
    fileSize: '4.5 MB',
    downloads: 1240
  }
];

const DEFAULT_NOTICES: Notice[] = [
  {
    id: 'n1',
    title: 'Midterm Examination Schedule - Spring 2025',
    content: 'All students are requested to collect their admit cards from the office by next Monday.',
    date: '2025-02-20',
    priority: 'High',
    author: 'Exam Controller'
  }
];

const DEFAULT_ROUTINE: ScheduleItem[] = [
  { day: 'Sunday', time: '10:00 AM - 11:30 AM', subject: 'CSE-211: Algorithms', room: 'R-402' },
];

// Helper to interact with localStorage
const getStored = <T>(key: string, defaultValue: T): T => {
  const stored = localStorage.getItem(key);
  if (!stored) return defaultValue;
  try {
    return JSON.parse(stored);
  } catch {
    return defaultValue;
  }
};

const setStored = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Exporting dynamic getters for the app to use
export const getResources = () => getStored<Resource[]>('hub_resources', DEFAULT_RESOURCES);
export const saveResources = (data: Resource[]) => setStored('hub_resources', data);

export const getNotices = () => getStored<Notice[]>('hub_notices', DEFAULT_NOTICES);
export const saveNotices = (data: Notice[]) => setStored('hub_notices', data);

export const getRoutine = () => getStored<ScheduleItem[]>('hub_routine', DEFAULT_ROUTINE);
export const saveRoutine = (data: ScheduleItem[]) => setStored('hub_routine', data);

// Logs now primarily use Supabase, but we keep the type for UI consistency
export const addChatLog = async (log: Omit<ChatLog, 'id' | 'timestamp'>) => {
  // Save to cloud (Supabase)
  await logToSupabase(log);
};

export const MOCK_RESOURCES = getResources();
export const MOCK_NOTICES = getNotices();
export const CLASS_ROUTINE = getRoutine();
