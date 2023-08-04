import { Note, Category } from '../data/data.js'
import { DateExtractor } from './dateExtractor.js'
const extractDates = new DateExtractor()

interface Props {
  content: string
  name: string
  category: Category
  data: Array<Note>
}

export const createOneNote = ({ category, content, name, data }: Props): Array<Note> | [] => {
  console.log(content)
  const dates = extractDates.execute(content)
  const created = new Date().toLocaleString('en')
  const id = Math.round(Math.random() * 100)

  const todo: Note = {
    id,
    name,
    archived: false,
    category,
    content,
    dates,
    created,
  }

  const result = [...data, todo]

  return result
}
