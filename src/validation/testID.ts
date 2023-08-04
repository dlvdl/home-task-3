import { notes } from '../data/data.js'

export const testID = () => {
  return (value: number) => {
    const result = notes.find((note) => note.id == value)
    return result
  }
}
