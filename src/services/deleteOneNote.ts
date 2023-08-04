import { Note } from '../data/data.js'

interface props {
  data: Array<Note>
  key: number | string
}

export const deleteOneNote = ({ data, key }: props): Array<Note> | [] => {
  const result = data.filter((item) => item.id !== key)
  return result
}
