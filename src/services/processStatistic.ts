import { Note, SummaryItem, MostFrequentItem } from '../data/data.js'

export const computeAddedQuontity = (oldQuontity: number): number => {
  return oldQuontity + 1
}

export const computeDeletedQuontity = (oldQuontity: number): number => {
  return oldQuontity - 1
}

export const computeSummary = (data: Array<Note>): Array<SummaryItem> | [] => {
  const todos = data
  const counts = []

  for (const todo of todos) {
    const { category } = todo
    const known = counts.findIndex((c) => c.category == category)

    if (known == -1) {
      if (todo.archived) {
        counts.push({ category, active: 0, archived: 1 })
      } else {
        counts.push({ category, active: 1, archived: 0 })
      }
    } else {
      if (todo.archived) {
        counts[known].archived++
      } else {
        counts[known].active++
      }
    }
  }

  return counts
}

export const computeMostFrequent = (data: Array<Note>): MostFrequentItem => {
  const todos = data
  const counts: Array<MostFrequentItem> = []

  for (const todo of todos) {
    const { category } = todo
    const known = counts.findIndex((c) => c.category == category)

    if (known == -1) {
      counts.push({ category: category, quontity: 1 })
    } else {
      counts[known].quontity += 1
    }
  }
  let mostFrequent = counts[0]

  for (const item of counts) {
    const { quontity } = item
    mostFrequent = quontity > mostFrequent.quontity ? item : mostFrequent
  }
  return mostFrequent
}
