
export enum Semester {
  S1 = '1st Semester',
  S2 = '2nd Semester',
  S3 = '3rd Semester',
  S4 = '4th Semester',
  S5 = '5th Semester',
  S6 = '6th Semester',
  S7 = '7th Semester',
  S8 = '8th Semester'
}

export enum Category {
  NOTES = 'Notes',
  PYQ = 'Previous Questions',
  BOOKS = 'Books',
  LAB = 'Lab Manuals',
  ROUTINE = 'Routine'
}

export interface Resource {
  id: string;
  title: string;
  courseCode: string;
  semester: Semester;
  category: Category;
  author: string;
  uploadDate: string;
  downloadUrl: string;
  fileSize: string;
  downloads: number;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'High' | 'Medium' | 'Low';
  author: string;
}

export interface ScheduleItem {
  day: string;
  time: string;
  subject: string;
  room: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { 
    text?: string;
    inlineData?: {
      mimeType: string;
      data: string;
    }
  }[];
}

export interface ChatLog {
  id: string;
  timestamp: string;
  userName: string;
  query: string;
  response: string;
  hasImage: boolean;
}
