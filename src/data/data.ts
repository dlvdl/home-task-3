export interface Note {
  id: number
  name: string
  content: string
  created: string
  category: 'Task' | 'Idea' | 'Quote' | 'Random Thought'
  dates: Array<string> | undefined
  archived: boolean
}

export type Category = 'Task' | 'Idea' | 'Quote' | 'Random Thought'

export const notes: Array<Note> | [] = [
  {
    id: 254,
    name: 'Shop',
    content: 'Buy groceries',
    created: '7/28/2023',
    category: 'Task',
    dates: ['7/30/2023', '8/5/2023'],
    archived: false,
  },
  {
    id: 255,
    name: 'Study',
    content: 'Read a book',
    created: '7/28/2023',
    category: 'Task',
    dates: ['8/1/2023'],
    archived: true,
  },
  {
    id: 256,
    name: 'Exercise',
    content: 'Go for a jog',
    created: '7/28/2023',
    category: 'Task',
    dates: ['7/29/2023', '8/3/2023', '8/7/2023'],
    archived: false,
  },
  {
    id: 257,
    name: 'Work',
    content: 'Finish the report',
    created: '7/28/2023',
    category: 'Task',
    dates: ['8/2/2023', '8/6/2023'],
    archived: false,
  },
  {
    id: 258,
    name: 'Home',
    content: 'Clean the living room',
    created: '7/28/2023',
    category: 'Task',
    dates: ['8/4/2023'],
    archived: true,
  },
  {
    id: 259,
    name: 'Meeting',
    content: 'Attend the project meeting',
    created: '7/28/2023',
    category: 'Task',
    dates: ['8/8/2023'],
    archived: true,
  },
  {
    id: 260,
    name: 'Travel',
    content: 'Plan for vacation',
    created: '7/28/2023',
    category: 'Task',
    dates: ['8/10/2023', '8/15/2023'],
    archived: false,
  },
]
