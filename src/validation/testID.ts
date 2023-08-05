import { todos as notes } from '../controllers/notes.js'

export const testID = () => {
  return (value: number) => {
    const result = notes.find((note) => note.id == value)
    return result
  }
}
