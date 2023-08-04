import { Category } from '../data/data.js'

export const testCategory = () => {
  return (value: string): value is Category => {
    return ['Task', 'Idea', 'Quote', 'Random Thought'].includes(value)
  }
}
