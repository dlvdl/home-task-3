import { todos } from '../controllers/notes.js'

export const testStorage = () => {
  return () => {
    return todos.length === 0 ? true : undefined
  }
}
