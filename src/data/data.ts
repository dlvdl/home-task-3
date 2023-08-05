export type Category = 'Task' | 'Idea' | 'Quote' | 'Random Thought'

export interface Note {
  id: number
  name: string
  content: string
  created: string
  category: 'Task' | 'Idea' | 'Quote' | 'Random Thought'
  dates: Array<string> | undefined
  archived: boolean
}

export interface SummaryItem {
  category: Category
  active: number
  archived: number
}

export interface MostFrequentItem {
  category: Category
  quantity: number
}

export interface Stat {
  deleted: number
  created: number
  mostFrequentCategory: MostFrequentItem | object
  summary: Array<SummaryItem> | []
  generalAmount: number
}

export const notes: Array<Note> | [] = [
  {
    id: 254,
    name: 'Shop',
    content: 'Buy groceries',
    created: '28/07/2023',
    category: 'Task',
    dates: ['30/07/2023', '05/08/2023'],
    archived: false,
  },
  {
    id: 255,
    name: 'Study',
    content: 'Read a book',
    created: '28/07/2023',
    category: 'Task',
    dates: ['01/08/2023'],
    archived: false,
  },
  {
    id: 256,
    name: 'Exercise',
    content: 'Go for a jog',
    created: '28/07/2023',
    category: 'Idea',
    dates: ['29/07/2023', '03/08/2023', '07/08/2023'],
    archived: false,
  },
  {
    id: 257,
    name: 'Work',
    content: 'Finish the report',
    created: '28/07/2023',
    category: 'Idea',
    dates: ['02/08/2023', '06/08/2023'],
    archived: false,
  },
  {
    id: 258,
    name: 'Home',
    content: 'Clean the living room',
    created: '28/07/2023',
    category: 'Task',
    dates: ['04/08/2023'],
    archived: false,
  },
  {
    id: 259,
    name: 'Meeting',
    content: 'Attend the project meeting',
    created: '28/07/2023',
    category: 'Task',
    dates: ['08/08/2023'],
    archived: false,
  },
  {
    id: 260,
    name: 'Travel',
    content: 'Plan for vacation',
    created: '28/07/2023',
    category: 'Quote',
    dates: ['10/08/2023', '15/08/2023'],
    archived: false,
  },
]

export const statistic: Stat = {
  deleted: 0,
  created: 0,
  mostFrequentCategory: {},
  summary: [],
  generalAmount: 0,
}
