import { Note, Category } from '../data/data.js'

export type newData = { archived?: boolean; content?: string; category?: Category }

interface props {
  data: Array<Note>
  key: number | string
  newData: newData
}

export const editOneNote = ({ data, key, newData }: props): Array<Note> | [] => {
  const result = data.map((item) => {
    if (item.id !== key) return item
    const { archived, category, content } = newData

    if (archived) item.archived = archived
    if (category) item.category = category
    if (content) item.content = content

    return item
  })

  return result
}
