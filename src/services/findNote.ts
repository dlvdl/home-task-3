import { Note } from '../data/data.js'

interface props {
  data: Array<Note>
  key: number | string
}

export const findNote = ({ data, key }: props): Note | undefined => {
  const result = data.find((item) => item.id === key)
  return result
}
