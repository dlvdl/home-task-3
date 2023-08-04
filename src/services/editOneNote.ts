import { Note, Category } from '../data/data.js'

export type newData = { archived?: boolean; content?: string; category?: Category; name?: string }

interface props {
  data: Array<Note>
  key: number | string
  newData: newData
}

export const editOneNote = ({ data, key, newData }: props): Array<Note> | [] => {
  const result = data.map((item) => {
    if (item.id !== key) return item
    const { archived, category, content, name } = newData

    if (archived) {
      item.archived = archived
    }
    if (category) {
      item.category = category
    }
    if (content) {
      item.content = content
    }
    if (name) {
      item.name = name
    }

    return item
  })

  return result
}
